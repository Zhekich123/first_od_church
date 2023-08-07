'use strict';
document.addEventListener('DOMContentLoaded', function() {
  const serviceItemLinks = document.querySelectorAll('.service-item__link');
  const modal = document.getElementById('modal');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalText = modal.querySelector('#modalText');
  const modalText2 = modal.querySelector('#modalText2');
  const modalText3 = modal.querySelector('#modalText3');
  const modalText4 = modal.querySelector('#modalText4');
  const modalText5 = modal.querySelector('#modalText5');
  const modalText6 = modal.querySelector('#modalText6');
  const modalText7 = modal.querySelector('#modalText7');
  const modalImage = modal.querySelector('#modalImage');
  const modalMainTitle = modal.querySelector('#modalMainTitle');
  const modalMainText = modal.querySelector('#modalMainText');

  serviceItemLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const title = this.getAttribute('data-modal-title');
      const text = this.getAttribute('data-modal-text');
      const text2 = this.getAttribute('data-modal-text2');
      const text3 = this.getAttribute('data-modal-text3');
      const text4 = this.getAttribute('data-modal-text4');
      const text5 = this.getAttribute('data-modal-text5');
      const text6 = this.getAttribute('data-modal-text6');
      const text7 = this.getAttribute('data-modal-text7');
      const imageSrc = this.getAttribute('data-modal-image');

      const serviceItem = this.closest('.service-item');
      const itemTitle = serviceItem.querySelector('.service-item__title').textContent;
      const itemDescription = serviceItem.querySelector('.service-item__description').textContent;

      modalTitle.textContent = title;
      modalText.textContent = text;
      modalText2.textContent = text2;
      modalText3.textContent = text3;
      modalText4.textContent = text4;
      modalText5.textContent = text5;
      modalText6.textContent = text6;
      modalText7.textContent = text7;
      modalImage.setAttribute('src', imageSrc);

      modalMainTitle.textContent = itemTitle;
      modalMainText.textContent = itemDescription;

      modal.classList.add('active');
      document.body.classList.add('body-modal-open');
    });
  });

  const closeButton = modal.querySelector('.modal-close-btn');
  closeButton.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.classList.remove('body-modal-open');
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('active');
      document.body.classList.remove('body-modal-open');
    }
  });
});
