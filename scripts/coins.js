let popupTimeout;
let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
const SHOW = "show";
const MY_POPUP = "myPopup";
import {
  updateCoinsDisplay,
  printPopUpMessage,
} from './ui.js';

import { hidePopup, playAudio } from './popup.js';

export function changeCoins(change) {
  let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;

  if (currentNumber >= change) {
    currentNumber -= change;
    updateCoinsDisplay(currentNumber);
    localStorage.setItem("currentNumber", currentNumber);
    const ending = getCoinsEnding(change);
    printPopUpMessage(`Вы потратили ${change} монет${ending}`);
  } else {
    printPopUpMessage("Накопите больше монет");
  }
}

export async function increaseNumber() {
  console.log("Increase number");
  const popup = document.getElementById("myPopup");
  await hidePopup(popup);
  changeCoins(1);
  playAudio();
}

export async function updateNumber() {
  console.log("Update number");
  let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
  currentNumber += 1;
  updateCoinsDisplay(currentNumber);
  localStorage.setItem("currentNumber", currentNumber);

  const popup = document.getElementById("myPopup");
  await hidePopup(popup);
  printPopUpMessage("Вы заработали 1 монету");

  playAudio();
}

export function getCoinsEnding(coins) {
  if (coins === 1) {
    return "у";
  } else if (coins >= 2 && coins <= 4) {
    return "ы";
  } else {
    return "";
  }
}