function includeHTML() {
  const includes = document.getElementsByTagName('include');
  for (const include of includes) {
    const filePath = include.getAttribute('src');
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        include.insertAdjacentHTML('afterend', data);
        include.remove();
      });
  }
}