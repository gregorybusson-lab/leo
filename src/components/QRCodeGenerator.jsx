import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QRCodeGenerator() {
  const [showQR, setShowQR] = useState(false);
  const siteUrl = 'https://leobs.fr';

  const downloadQR = () => {
    const svg = document.getElementById('qr-code-svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      
      const downloadLink = document.createElement('a');
      downloadLink.download = 'leobs-qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="fixed bottom-28 right-8 z-40">
      {/* QR Code Button */}
      <button
        onClick={() => setShowQR(!showQR)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 
                   text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300
                   flex items-center justify-center group relative hover:scale-110"
        aria-label="Générer QR Code"
      >
        <svg 
          className="w-7 h-7" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" 
          />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 text-sm text-white bg-gray-900 
                       rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                       whitespace-nowrap pointer-events-none">
          QR Code
        </span>
      </button>

      {/* QR Code Modal */}
      {showQR && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowQR(false)}
        >
          <div 
            className="bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/20 rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-script text-emerald-400">QR Code</h3>
              <button
                onClick={() => setShowQR(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl mb-6 flex justify-center">
              <QRCodeSVG
                id="qr-code-svg"
                value={siteUrl}
                size={256}
                level="H"
                includeMargin={true}
                fgColor="#000000"
                bgColor="#ffffff"
              />
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 text-center text-sm">
                Scannez pour accéder à <span className="text-emerald-400 font-bold">leobs.fr</span>
              </p>

              <button
                onClick={downloadQR}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white 
                         py-3 px-6 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 
                         transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
              >
                📥 Télécharger le QR Code
              </button>

              <div className="text-xs text-gray-400 text-center">
                <p>Utilisez ce QR code sur vos :</p>
                <p className="text-emerald-400 mt-1">
                  Flyers • Affiches • Stories Instagram • Posts Facebook
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
