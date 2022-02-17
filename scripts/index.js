function toggleDarkMode() {
  var body = document.getElementById('body');
  var currentClass = body.className;

  body.className = currentClass == "light" ? "dark" : "light"
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}