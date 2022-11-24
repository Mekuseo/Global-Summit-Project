// Toggle Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const faBars = document.querySelector('.fa-bars');
const faXmark = document.querySelector('.fa-xmark');

hamburgerMenu.addEventListener('click', () => {
  faBars.classList.toggle('close');
  faXmark.classList.toggle('active');

  if (faBars.classList.contains('close')) {
    navMenu.classList.add('active');
    faBars.classList.remove('active');
    faXmark.classList.add('active');
  } else {
    navMenu.classList.remove('active');
  }
});

const link = document.querySelectorAll('.nav-menu .link');

link.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    faBars.classList.remove('close');
    faXmark.classList.remove('active');
  });
});