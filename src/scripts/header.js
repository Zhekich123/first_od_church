'use strict';

// Получаем все элементы с классом 'item'
const items = document.querySelectorAll('.language-link');

// Функция для выключения класса у всех элементов, кроме выбранного
function deactivateAllExcept(selectedItem) {
  items.forEach((item) => {
    if (item !== selectedItem) {
      item.classList.remove('active');
    }
  });
}

// Добавляем обработчик события 'click' на каждый элемент
items.forEach((item) => {
  item.addEventListener('click', function () {
    // При клике на элемент выключаем класс у всех остальных элементов
    deactivateAllExcept(item);
    // Включаем/выключаем класс у текущего элемента
    item.classList.toggle('active');
  });
});




const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navList2 = document.querySelector('.nav__list--2')
const navLinks = document.querySelectorAll('.nav__link');
const logoTitle = document.querySelector('.logo-title');
const logoImage = document.querySelector('.logo__image');
const logoImageBlack = document.querySelector('.logo__image-black');
const headerContainer = document.querySelector('.header__container')
const scrollThreshold = 750; 

function toggleNavClasses() {
  if (window.scrollY > scrollThreshold) {
    nav.classList.add('active');
    navList.classList.add('active');
    navList2.classList.add('active');
    navLinks.forEach(link => link.classList.add('active'));
    logoTitle.classList.add('active');
    logoImage.classList.add('active');
    logoImageBlack.classList.add('active');
    headerContainer.classList.add('active');
  } else {
    navList.classList.remove('active');
    navList2.classList.remove('active');
    nav.classList.remove('active');
    navLinks.forEach(link => link.classList.remove('active'));
    logoTitle.classList.remove('active');
    logoImage.classList.remove('active');
    logoImageBlack.classList.remove('active');
    headerContainer.classList.remove('active');
  }
}

window.addEventListener('scroll', toggleNavClasses);

