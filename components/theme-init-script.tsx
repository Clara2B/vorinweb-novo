import Script from "next/script";

const THEME_INIT = `
(function () {
  var html = document.documentElement;
  try {
    var saved = localStorage.getItem('vw-theme') || 'dark';
    html.setAttribute('data-theme', saved);
  } catch (e) {
    html.setAttribute('data-theme', 'dark');
  }
  // The data-theme swap above happens before the browser's first paint/style
  // pass. If a CSS transition is already "live" on an element at that exact
  // moment, some engines get stuck rendering the pre-swap (light) computed
  // color for theme-driven background/text properties instead of applying
  // the new value — e.g. the header or theme toggle staying light in dark
  // mode. Disabling transitions for two frames sidesteps that race; normal
  // toggling afterwards (e.g. clicking the theme switch) still animates.
  html.classList.add('theme-init');
  var clear = function () {
    html.classList.remove('theme-init');
  };
  // rAF is throttled (or never fires) on hidden/backgrounded tabs, so back it
  // with a timeout too — whichever fires first wins, the other is a no-op.
  requestAnimationFrame(function () {
    requestAnimationFrame(clear);
  });
  setTimeout(clear, 300);
})();
`;

export function ThemeInitScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {THEME_INIT}
    </Script>
  );
}
