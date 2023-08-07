'use strict';

const numberInput = document.querySelector('.donate__field');

numberInput.oninput = function (event) {
  const inputText = event.target.value;
  const cleanedInput = inputText.replace(/\D/g, '');

  if (cleanedInput <= 0) { // Исправленное условие здесь
    event.target.value = '';
  } else {
    event.target.value = cleanedInput;
  }
};

const arrowElement = document.querySelector('.donate__currency-arrow');
const currencyDropdown = document.querySelector('.donate__currency-dropdown');
const selectedCurrency = document.querySelector('.donate__currency-choosed');
const currencyList = document.querySelector('.donate__currency-list');

function toggleDropdown() {
  currencyDropdown.classList.toggle('active');
}

selectedCurrency.addEventListener('click', function () {
  toggleDropdown();
});

arrowElement.addEventListener('click', function () {
  toggleDropdown();
});

currencyList.addEventListener('click', function (event) {
  const selectedOption = event.target;
  if (selectedOption.classList.contains('donate__currency-item')) {
    selectedCurrency.textContent = selectedOption.dataset.value;
    toggleDropdown();
  }
});

document.addEventListener('click', function (event) {
  if (!currencyDropdown.contains(event.target) && !selectedCurrency.contains(event.target)) {
    currencyDropdown.classList.remove('active');
  }
});


const fixButtons = document.querySelectorAll('.donate__fix-button');
const fieldInput = document.querySelector('.donate__field');

fixButtons.forEach(button => {
  button.addEventListener('click', function() {
    const value = button.textContent.trim(); // Получаем текст кнопки и удаляем возможные пробелы
    fieldInput.value = value; // Присваиваем значение кнопки в поле ввода
  });
});






// for Requisites

const buttonsBlocks = document.querySelectorAll('.donate__buttons > div');
const requisitesBlocks = document.querySelectorAll('.donate__requisites > div');

const modal = document.getElementById('modal__requisites-data');
const modalTitle2 = document.getElementById('requisitesTitle');

const paypalWhite = './src/styles/images/paypal-logo-white.svg';
const moneygramWhite = './src/styles/images/moneygram-logo-white.svg';
const westernWhite = './src/styles/images/westernunion-logo-white.svg';

const paypalText = document.querySelector('.donate__button-text-paypal');
const moneygramText = document.querySelector('.donate__button-text-moneygram');
const westernText = document.querySelector('.donate__button-text-western');

const paypalImage = document.querySelector('.donate__paypal-link img');
const moneygramImage = document.querySelector('.donate__moneygram-link img');
const westernImage = document.querySelector('.donate__western-union-link img');

let activeButton = null;

function openModal(data, block) {
  modal.classList.add('active');
  document.querySelector('.donate-container').classList.add('active');

  const modalTitle = document.getElementById('dynamicTitle');
  const modalName = document.getElementById('dynamicName');
  const modalText = document.getElementById('dynamicText');
  const modalEmail = document.getElementById('dynamicEmail');
  const modalNumber = document.getElementById('dynamicNumber');
  const modalOrg = document.getElementById('dynamicOrg');
  const modalEdrpu = document.getElementById('dynamicEdrpu');
  const modalBank = document.getElementById('dynamicBank');
  const modalIban = document.getElementById('dynamicIban');
  const modalDisc = document.getElementById('dynamicDisc');

  modalTitle.textContent = data.title;
  modalName.textContent = data.name;
  modalText.textContent = data.text;
  modalEmail.textContent = data.email;
  modalNumber.textContent = data.number;
  modalTitle2.textContent = data.title2;
  modalOrg.textContent = data.organization;
  modalEdrpu.textContent = data.edrpu;
  modalBank.textContent = data.bank;
  modalIban.textContent = data.iban;
  modalDisc.textContent = data.disclaimer;

  if (activeButton) {
    activeButton.classList.remove('active');
    if (activeButton === block) {
      activeButton = null;
      closeModal();
      return;
    }
  }

  // Возвращаем изображения к исходному состоянию перед активацией новой кнопки
  paypalImage.src = './src/styles/images/paypal-logo.svg';
  moneygramImage.src = './src/styles/images/moneygram-logo.svg';
  westernImage.src = './src/styles/images/westernunion-logo.svg';

  // Возвращаем цвет текста к исходному состоянию перед активацией новой кнопки
  paypalText.style.color = '#202020';
  moneygramText.style.color = '#202020';
  westernText.style.color = '#202020';

  // Обновляем изображения и цвет текста, если кнопка активна
  if (block.classList.contains('donate__paypal')) {
    paypalImage.src = paypalWhite;
    paypalText.style.color = '#fff';
  } else if (block.classList.contains('donate__moneygram')) {
    moneygramImage.src = moneygramWhite;
    moneygramText.style.color = '#fff';
  } else if (block.classList.contains('donate__western-union')) {
    westernImage.src = westernWhite;
    westernText.style.color = '#fff';
  }

  block.classList.add('active');
  activeButton = block;
}

function closeModal() {
  modal.classList.remove('active');
  document.querySelector('.donate-container').classList.remove('active');
  if (activeButton) {
    activeButton.classList.remove('active');
    activeButton = null;
  }

  // Возвращаем изображения к исходному состоянию
  paypalImage.src = './src/styles/images/paypal-logo.svg';
  moneygramImage.src = './src/styles/images/moneygram-logo.svg';
  westernImage.src = './src/styles/images/westernunion-logo.svg';
  
  // Возвращаем цвет текста к исходному состоянию
  paypalText.style.color = '#202020';
  moneygramText.style.color = '#202020';
  westernText.style.color = '#202020';
}

buttonsBlocks.forEach(block => {
  block.addEventListener('click', function(event) {
    const data = {
      title: block.getAttribute('data-title'),
      name: block.getAttribute('data-name'),
      text: block.getAttribute('data-text'),
      email: block.getAttribute('data-email'),
      number: block.getAttribute('data-number'),
      title2: '',
      organization: '',
      edrpu: '',
      bank: '',
      iban: '',
      disclaimer: ''
    };

    openModal(data, block);
  });
});

requisitesBlocks.forEach(block => {
  block.addEventListener('click', function(event) {
    const data = {
      title: '',
      name: '',
      text: '',
      email: '',
      number: '',
      title2: block.getAttribute('data-title2'),
      organization: block.getAttribute('data-organization'),
      edrpu: block.getAttribute('data-edrpu'),
      bank: block.getAttribute('data-bank'),
      iban: block.getAttribute('data-iban'),
      disclaimer: block.getAttribute('data-disclaimer')
    };

    openModal(data, block);
  });
});

document.addEventListener('click', function(event) {
  const target = event.target;

  if (!target.closest('.requisites-modal') && !target.closest('.donate__requisites') && !target.closest('.donate__buttons')) {
    closeModal();
  }
});
