let headerMenu = document.querySelector('.menu');
let menuButton = document.querySelector('.menu__button');
let header = document.querySelector('.header__wrapper');
let addressMap = document.querySelector('.address__map');

headerMenu.classList.remove('menu--nojs');
header.classList.remove('header__wrapper--nojs');
addressMap.classList.remove('address__map--nojs');

menuButton.addEventListener('click', function () {
  headerMenu.classList.toggle('menu--active')
});
