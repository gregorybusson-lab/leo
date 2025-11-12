// Singleton pour gérer l'API YouTube IFrame
let isAPILoaded = false;
let isAPILoading = false;
const callbacks = [];

export const loadYouTubeAPI = () => {
  return new Promise((resolve) => {
    // API déjà chargée
    if (isAPILoaded) {
      resolve();
      return;
    }

    // API en cours de chargement, ajouter à la queue
    if (isAPILoading) {
      callbacks.push(resolve);
      return;
    }

    // Charger l'API
    isAPILoading = true;
    callbacks.push(resolve);

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      isAPILoaded = true;
      isAPILoading = false;
      callbacks.forEach(cb => cb());
      callbacks.length = 0;
    };
  });
};
