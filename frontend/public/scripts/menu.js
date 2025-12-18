document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger')
  const navLinks = document.getElementById('navLinks')
  const links = navLinks.querySelectorAll('a')

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('active')
  })

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active')
      navLinks.classList.remove('active')
    })
  })

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active')
      navLinks.classList.remove('active')
    }
  })
})