let headerMenu = document.querySelector('.main-menu');
let menuButton = document.querySelector('.burger-button');
let header = document.querySelector('.header__top-wrapper');
let contactMap = document.querySelector('.contacts__map');

menuButton.classList.remove('burger-button--nojs');
headerMenu.classList.remove('main-menu--nojs');
header.classList.remove('header__top-wrapper--nojs');
contactMap?.classList.remove('contacts__map--nojs');

menuButton.addEventListener('click', function () {
  headerMenu.classList.toggle('main-menu--active')
});

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('burger-button--active')
});
