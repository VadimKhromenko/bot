let popupTimeout;
let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
const SHOW = "show";
const MY_POPUP = "myPopup";

import {hidePopup} from './popup.js';

// Функция для создания и добавления элементов в контейнер
export function createAndAppendElements(data, container, clickHandler) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.className = "box";
    div.onclick = clickHandler;

    // Создаем изображение
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    const image = document.createElement("img");
    image.src = item.imageUrl;

    // Создаем контейнер для наведения курсора
    const hoverContent = document.createElement("div");
    hoverContent.className = "hover-content";

    // Создаем заголовок
    const title = document.createElement("h3");
    title.textContent = item.title;

    // Создаем описание
    const description = document.createElement("p");
    description.textContent = item.description;

    // Добавляем элементы в контейнер для наведения курсора
    hoverContent.appendChild(description);

    // Добавляем элементы в див
    imageContainer.appendChild(image);
    imageContainer.appendChild(title);
    div.appendChild(imageContainer);
    div.appendChild(hoverContent);

    // Добавляем див в контейнер
    container.appendChild(div);
  });
}

export function updateCoinsDisplay(coins) {
  const headerNumber = document.getElementById("headerNumber");
  headerNumber.textContent = `Ваши монеты: ${coins}`;
}

export function printPopUpMessage(message) {
  console.log("printPopUpMessage");

  const popup = document.getElementById(MY_POPUP);
  const windowHeight = window.innerHeight;
  const popupHeight = popup.offsetHeight;
  const topPosition = (windowHeight - popupHeight) / 2;
  popup.style.top = `${topPosition}px`;
  popup.textContent = message;
  popup.classList.add(SHOW);
  console.log("printPopUpMessage added SHOW:", popup);

  clearTimeout(popupTimeout);

  popupTimeout = setTimeout(() => {
    hidePopup(popup);
  }, 2000);
}
