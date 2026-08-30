/**
 * banner.js
 * Standalone banner component for API documentation pages.
 * This script listens for the Swagger UI page to load, then injects your styled banner box at the top of the interface.
 */

// 1. Define your banner text and style configuration
window.BannerConfig = {
  message:  "<strong>Notice:</strong> This interface is for sample documentation and specification reference only.<br>" +
   "Interactive endpoint testing ('Try it out') and authentication controls have been disabled intentionally.",
  bgColor: "#f8f9fa",
  borderColor: "#17a1a1",
  textColor: "#f85555"
};

// 2. Auto-inject the banner when the Swagger UI container renders
(function injectNoticeBanner() {
  window.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver(() => {
      const targetNode = document.querySelector('.swagger-ui .info');
      
      if (targetNode && !document.getElementById('swagger-read-only-banner')) {
        const banner = document.createElement('div');
        banner.id = 'swagger-read-only-banner';
        
        banner.style.cssText = `
          background-color: ${window.BannerConfig.bgColor};
          border-left: 4px solid ${window.BannerConfig.borderColor};
          padding: 12px 16px;
          margin-bottom: 20px;
          border-radius: 4px;
          font-family: sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: ${window.BannerConfig.textColor};
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        `;
        
        banner.innerHTML = window.BannerConfig.message;
        targetNode.prepend(banner);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
})();