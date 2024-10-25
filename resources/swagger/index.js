const THEMES = ['light', 'dark'];
const themeParam = new URLSearchParams(window.location.search).get('theme')
if (THEMES.includes(themeParam)) {
  document.documentElement.setAttribute('data-theme', themeParam);
}