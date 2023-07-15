"use strict";
// Получаем ссылку и информацию элементов
const link = document.querySelector(".service-item__link");
const serviceItem = document.querySelector(".service-item");
// При нажатии на ссылку, изменяем видимость информации
link.addEventListener("click", function(event) {
    event.preventDefault();
    // Добавляем/удаляем класс open у родительского элемента, чтобы показать/скрыть полный текст
    serviceItem.classList.toggle("open");
});

//# sourceMappingURL=index.832c634e.js.map
