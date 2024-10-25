const THEMES = ['light', 'dark']
const themeParam = new URLSearchParams(window.location.search).get('theme')
if (THEMES.includes(themeParam)) {
  document.documentElement.setAttribute('data-theme', themeParam)
}

/* ref. https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/ */
window.onload = () => {
  window.ui = SwaggerUIBundle({
    spec: window.apiDocs,
    dom_id: '#swagger-ui',
  })
}
