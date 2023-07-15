'use strict';

const images = document.querySelectorAll('.slider__image');
const dots = document.querySelectorAll('.slider__dott');
let currentIndex = 0;

function updateSlider() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();
setInterval(nextSlide, 5000);
