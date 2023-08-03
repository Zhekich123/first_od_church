'use strict';

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


