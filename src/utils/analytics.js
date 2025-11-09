// Advanced Analytics Utilities

/**
 * Extract and track UTM parameters from URL
 * Tracks: utm_source, utm_medium, utm_campaign, utm_content, utm_term
 */
export const trackUTMParameters = () => {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {
    source: urlParams.get('utm_source'),
    medium: urlParams.get('utm_medium'),
    campaign: urlParams.get('utm_campaign'),
    content: urlParams.get('utm_content'),
    term: urlParams.get('utm_term'),
  };

  // Only track if at least one UTM parameter is present
  if (Object.values(utmParams).some(val => val !== null)) {
    if (window.gtag) {
      window.gtag('event', 'utm_tracking', {
        event_category: 'traffic_source',
        utm_source: utmParams.source || 'direct',
        utm_medium: utmParams.medium || 'none',
        utm_campaign: utmParams.campaign || 'none',
        utm_content: utmParams.content || 'none',
        utm_term: utmParams.term || 'none',
      });
    }

    // Store in sessionStorage for later reference
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }

  return utmParams;
};

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%)
 * Fires only once per milestone per session
 */
export const initScrollDepthTracking = () => {
  if (typeof window === 'undefined') return;

  const milestones = [25, 50, 75, 100];
  const triggered = new Set();

  const checkScrollDepth = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    milestones.forEach(milestone => {
      if (scrollPercent >= milestone && !triggered.has(milestone)) {
        triggered.add(milestone);
        
        if (window.gtag) {
          window.gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${milestone}%`,
            value: milestone,
            non_interaction: true,
          });
        }
      }
    });
  };

  window.addEventListener('scroll', checkScrollDepth, { passive: true });
  
  // Cleanup function
  return () => window.removeEventListener('scroll', checkScrollDepth);
};

/**
 * Track time on page milestones (10s, 30s, 60s, 120s)
 * Fires only once per milestone
 */
export const initTimeOnPageTracking = () => {
  if (typeof window === 'undefined') return;

  const milestones = [
    { seconds: 10, label: '10_seconds' },
    { seconds: 30, label: '30_seconds' },
    { seconds: 60, label: '1_minute' },
    { seconds: 120, label: '2_minutes' },
  ];

  const triggered = new Set();
  const startTime = Date.now();

  const checkTimeOnPage = () => {
    const elapsedSeconds = (Date.now() - startTime) / 1000;

    milestones.forEach(({ seconds, label }) => {
      if (elapsedSeconds >= seconds && !triggered.has(seconds)) {
        triggered.add(seconds);
        
        if (window.gtag) {
          window.gtag('event', 'time_on_page', {
            event_category: 'engagement',
            event_label: label,
            value: seconds,
            non_interaction: true,
          });
        }
      }
    });
  };

  const interval = setInterval(checkTimeOnPage, 1000);
  
  // Cleanup function
  return () => clearInterval(interval);
};

/**
 * Detect rage clicks (3+ clicks on same element within 1 second)
 * Indicates user frustration
 */
export const initRageClickDetection = () => {
  if (typeof window === 'undefined') return;

  const clickTracker = new Map();

  const handleClick = (e) => {
    const target = e.target;
    const now = Date.now();
    
    // Get or create click history for this element
    if (!clickTracker.has(target)) {
      clickTracker.set(target, []);
    }
    
    const clicks = clickTracker.get(target);
    
    // Add current click
    clicks.push(now);
    
    // Remove clicks older than 1 second
    const recentClicks = clicks.filter(time => now - time < 1000);
    clickTracker.set(target, recentClicks);
    
    // Detect rage click (3+ clicks within 1 second)
    if (recentClicks.length >= 3) {
      const elementInfo = {
        tag: target.tagName,
        class: target.className,
        id: target.id,
        text: target.innerText?.substring(0, 50) || '',
      };
      
      if (window.gtag) {
        window.gtag('event', 'rage_click', {
          event_category: 'engagement',
          event_label: `${elementInfo.tag}.${elementInfo.class || elementInfo.id}`,
          element_tag: elementInfo.tag,
          element_class: elementInfo.class,
          element_id: elementInfo.id,
          element_text: elementInfo.text,
        });
      }
      
      // Clear history to avoid multiple triggers
      clickTracker.delete(target);
    }
  };

  document.addEventListener('click', handleClick);
  
  // Cleanup function
  return () => document.removeEventListener('click', handleClick);
};

/**
 * Initialize all advanced analytics
 * Call this once when the app loads
 */
export const initAdvancedAnalytics = () => {
  if (typeof window === 'undefined') return;

  // Track UTM parameters immediately
  trackUTMParameters();

  // Initialize tracking modules
  const cleanupScrollDepth = initScrollDepthTracking();
  const cleanupTimeOnPage = initTimeOnPageTracking();
  const cleanupRageClick = initRageClickDetection();

  // Return cleanup function
  return () => {
    cleanupScrollDepth?.();
    cleanupTimeOnPage?.();
    cleanupRageClick?.();
  };
};
