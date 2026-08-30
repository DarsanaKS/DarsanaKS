/**
 * hide-items.js
 * 
 * Custom Swagger UI configurations and plugins to toggle 
 * the visibility of interactive execution features.
 */

// 1. Swagger UI Plugin to completely remove the "Authorize" button from the header
window.HideAuthorizePlugin = function () {
  return {
    components: {
      AuthorizeBtn: () => null,
      authorizeBtn: () => null
    }
  };
};
// 2. Inject CSS as a fallback to ensure the button is hidden regardless of spec overrides
(function injectHideStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    .swagger-ui .scheme-container .btn.authorize,
    .swagger-ui .auth-wrapper,
    .swagger-ui .authorization__btn {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
})();

// 3. Export default configuration options for clean inclusion in index.html
//configuration for the hide
window.SwaggerHideConfig = {
  // Empty array removes "Try it out" from GET, POST, PUT, DELETE, etc.
  supportedSubmitMethods: [], 
  // Applies the Authorize button removal plugin
  plugins: [
    window.HideAuthorizePlugin
  ]
};