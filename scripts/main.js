import {
  createAndAppendElements,
  updateCoinsDisplay,
} from './ui.js';

import {
  changeCoins,
  increaseNumber,
  updateNumber,
} from './coins.js';


const container = document.getElementById("container");
const newContainer = document.getElementById("myNewContainer");

const data = [
  {
    title: "Йога (15 минут)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    imageUrl: "/yoga_1.jpg",
  },
  {
    title: "Медитация (15 минут)",
    description: "Описание 2",
    imageUrl: "/yoga_1.jpg",
  },
  { title: "Уборка", description: "Описание 3", imageUrl: "/yoga_1.jpg" },
  {
    title: "Прогулка (30 минут)",
    description: "Описание 4",
    imageUrl: "/yoga_1.jpg",
  },
];

const newData = [
  {
    title: "1 серия сериала",
    description: "Описание 1",
    imageUrl: "/yoga_1.jpg",
  },
  {
    title: "Порция сладостей",
    description: "Описание 2",
    imageUrl: "/yoga_1.jpg",
  },
  {
    title: "30 минут в соц.сетях",
    description: "Описание 3",
    imageUrl: "/yoga_1.jpg",
  },
  { title: "1 фильм", description: "Описание 4", imageUrl: "/yoga_1.jpg" },
  {
    title: "Новый блок 5",
    description: "Описание 5",
    imageUrl: "/yoga_1.jpg",
    onClick: () => alert("Вы кликнули на новый блок 5 "),
  },
];

createAndAppendElements(data, container, updateNumber);
createAndAppendElements(newData, newContainer, increaseNumber);

document.addEventListener("DOMContentLoaded", () => {
  const currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
  updateCoinsDisplay(currentNumber);
});
