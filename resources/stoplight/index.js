const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}