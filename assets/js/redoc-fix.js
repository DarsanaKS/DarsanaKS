/*
  redoc-fix.js
  Takes the Redoc API reference out of MkDocs Material's text styles.

  Why: Material styles everything inside its content area through the
  .md-typeset class (lists, headings, margins). Redoc renders inside that
  area, so Material's rules override Redoc's own styles. Example:
  ".md-typeset ul:not([hidden]) { display: flow-root }" beats Redoc's
  "display: none" on collapsed menu groups, so sidebar groups never
  collapse.

  Fix: remove the .md-typeset class from the content area on pages that
  contain a <redoc> element. Other pages are not affected.
  Headings that should keep the site style are targeted directly in
  redocstyle.css (they no longer rely on .md-typeset).
*/
(function () {
  function detachRedocFromTypeset() {
    document.querySelectorAll("redoc").forEach(function (el) {
      var typeset = el.closest(".md-typeset");
      if (typeset) {
        typeset.classList.remove("md-typeset");
      }
    });
  }

  // Material's instant navigation emits document$ on every page load;
  // fall back to a plain run if it is not available.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(detachRedocFromTypeset);
  } else {
    detachRedocFromTypeset();
  }
})();
