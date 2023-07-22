let headerMenu = document.querySelector('.main-menu');
let menuButton = document.querySelector('.main-menu__button');
// let header = document.querySelector('.header__wrapper');
// let addressMap = document.querySelector('.address__map');

headerMenu.classList.remove('main-menu--nojs');
// header.classList.remove('header__wrapper--nojs');
// addressMap.classList.remove('address__map--nojs');

menuButton.addEventListener('click', function () {
  headerMenu.classList.toggle('main-menu--active')
});
