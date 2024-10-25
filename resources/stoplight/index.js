const THEMES = ['light', 'dark']
const themeParam = new URLSearchParams(window.location.search).get('theme')
if (THEMES.includes(themeParam)) {
  document.documentElement.setAttribute('data-theme', themeParam)
}

/* ref. https://github.com/stoplightio/elements/blob/main/docs/getting-started/elements/html.md#examples */
;(async () => {
  const docs = document.querySelector('.elements-api')
  docs.apiDescriptionDocument = window.apiDocs
})()
