'use strict';

const items = document.querySelectorAll('.language-link');
const itemsBurger = document.querySelectorAll('.language-link-burger');

function deactivateAllExcept(selectedItem) {
  items.forEach((item) => {
    if (item !== selectedItem) {
      item.classList.remove('active');
    }
  });
}

items.forEach((item) => {
  item.addEventListener('click', function () {
    deactivateAllExcept(item);
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



// burger menu

const burgerIcon = document.querySelector('.header__burger-icon');
const logotypeSection = document.querySelector('.logotype');
const logoTitleScroll = document.querySelector('.logo-title');
const headerBurger = document.querySelector('.header__burger-menu');
const navBurgerLink = document.querySelectorAll('.nav__link-burger');
const navScroll = document.querySelector('.nav');
const burgerBody = document.querySelector('.header__burger');

function toggleMenu() {
  burgerIcon.classList.toggle('open');
  logotypeSection.classList.toggle('inactive');
  headerBurger.classList.toggle('open');
  logoTitleScroll.classList.toggle('active');
  burgerBody.classList.toggle('active');
  document.body.classList.toggle('body-modal-open');

  if (nav.classList.contains('active')) {
    if (burgerBody.classList.contains('active')) {
      navScroll.classList.add('scroll');
    } else {
      navScroll.classList.remove('scroll');
    }
  } else {
    burgerBody.classList.remove('active');
  }
}

burgerIcon.addEventListener('click', toggleMenu);

navBurgerLink.forEach(link => {
  link.addEventListener('click', function () {
    toggleMenu();
  });
});

