function toggleDarkMode() {
  var body = document.getElementById('body');
  var currentClass = body.className;

  body.className = currentClass == "light" ? "dark" : "light"
}

const toTop = document.querySelector(".scrollTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset < 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}