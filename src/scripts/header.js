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


// nav fixed
document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector(".intro__video");
  const videoContainer = video.parentElement;
  const logoTitle = document.querySelector('.logo-title');
  const navItems = document.querySelectorAll(".nav__link"); 
  const logoWhite = document.querySelector('.logo__image');
  const logoBlack = document.querySelector('.logo__image-black');
  const logoLink = document.querySelector('.logo__link');
  const navList = document.querySelector('.nav__list');
  const nav = document.querySelector('.nav');


  function updateActiveClass() {
    const rect = videoContainer.getBoundingClientRect();

    if (rect.bottom <= window.innerHeight && rect.top >= -10) {
      navItems.forEach(item => {
        item.classList.remove('active');
      });
      logoTitle.classList.remove('active');
      logoWhite.classList.remove('active');
      logoBlack.classList.remove('active');
      logoLink.classList.remove('inactive');
      navList.classList.remove('active');
      nav.classList.remove('active');
    } else {
      navItems.forEach(item => {
        item.classList.add('active');
      });
      logoTitle.classList.add('active');
      logoWhite.classList.add('active');
      logoBlack.classList.add('active');
      logoLink.classList.add('inactive');
      navList.classList.add('active');
      nav.classList.add('active');
    }
  }

  updateActiveClass();
  window.addEventListener("scroll", updateActiveClass);
});







// burger menu

const burgerIcon = document.querySelector('.header__burger-icon');
const logotypeSection = document.querySelector('.logotype');
const logoTitleScroll = document.querySelector('.logo-title');
const headerBurger = document.querySelector('.header__burger-menu');
const navBurgerLink = document.querySelectorAll('.nav__link-burger');
const navScroll = document.querySelector('.nav');
const burgerBody = document.querySelector('.header__burger');
const logoBurger = document.querySelector('.logo__image-black-burger');
const headerContainer = document.querySelector('.header__container')

function toggleMenu() {
  burgerIcon.classList.toggle('open');
  logotypeSection.classList.toggle('inactive');
  headerBurger.classList.toggle('open');
  logoTitleScroll.classList.toggle('active');
  burgerBody.classList.toggle('active');
  document.body.classList.toggle('body-modal-open');
  logoBurger.classList.toggle('active');
  headerContainer.classList.toggle('active');

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

burgerBody.addEventListener('click', toggleMenu);

navBurgerLink.forEach(link => {
  link.addEventListener('click', function () {
    toggleMenu();
  });
});

