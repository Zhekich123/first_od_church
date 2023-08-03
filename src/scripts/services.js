'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const serviceItemLinks = document.querySelectorAll('.service-item__link');
  const modal = document.getElementById('modal');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalText = modal.querySelector('#modalText');
  const modalImage = modal.querySelector('#modalImage');

  // Создаем элемент для маски и добавляем его в DOM
  const maskElement = document.createElement('div');
  maskElement.classList.add('service-item__mask');
  document.body.appendChild(maskElement);

  serviceItemLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const title = this.getAttribute('data-modal-title');
      const text = this.getAttribute('data-modal-text');
      const imageSrc = this.getAttribute('data-modal-image');

      modalTitle.textContent = title;
      modalText.textContent = text;
      modalImage.setAttribute('src', imageSrc);

      // При открытии модалки устанавливаем высоту body равную высоте модалки,
      // чтобы предотвратить дергание страницы из-за изменения положения элемента
      document.body.style.height = modal.offsetHeight + 'px';

      // Добавляем класс .active и показываем маску
      modal.classList.add('active');
      maskElement.style.display = 'block';
    });
  });

  const closeButton = modal.querySelector('.modal-close-btn');
  closeButton.addEventListener('click', function() {
    modal.classList.remove('active');

    // При закрытии модалки восстанавливаем высоту body
    document.body.style.height = '';

    maskElement.style.display = 'none'; // Скрываем маску при закрытии модалки

    setTimeout(() => {
      modal.scrollTop = 0; // Возвращаем скролл модалки в начальное положение
    }, 200); // Задержка должна быть равна времени анимации в стилях
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('active');

      // При закрытии модалки восстанавливаем высоту body
      document.body.style.height = '';

      maskElement.style.display = 'none'; // Скрываем маску при закрытии модалки

      setTimeout(() => {
        modal.scrollTop = 0; // Возвращаем скролл модалки в начальное положение
      }, 200); // Задержка должна быть равна времени анимации в стилях
    }
  });
});
