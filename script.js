var popupTimeout;

document.addEventListener("DOMContentLoaded", function () {
  let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
  document.getElementById(
    "headerNumber"
  ).textContent = `Ваши монеты: ${currentNumber}`;
});

function increaseNumber() {
  let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
  var popup = document.getElementById("myPopup");

  if (popup.classList.contains("show")) {
    popup.classList.remove("show");
    clearTimeout(popupTimeout);
  }

  if (currentNumber > 0) {
    currentNumber -= 1;
    document.getElementById(
      "headerNumber"
    ).textContent = `Ваши монеты: ${currentNumber}`;
    localStorage.setItem("currentNumber", currentNumber);
    printPopUpMessage("Вы потратили 1 монету");
  } else if (currentNumber == 0) {
    printPopUpMessage("Накопите больше монет");
  }
}

function decreaseNumber() {
  let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;

  if (currentNumber > 0) {
    currentNumber -= 1;
    document.getElementById(
      "headerNumber"
    ).textContent = `Ваши монеты: ${currentNumber}`;
    localStorage.setItem("currentNumber", currentNumber);
  }
}

function updateNumber() {
  let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
  currentNumber += 1;
  document.getElementById(
    "headerNumber"
  ).textContent = `Ваши монеты: ${currentNumber}`;
  localStorage.setItem("currentNumber", currentNumber);

  var popup = document.getElementById("myPopup");
  if (popup.classList.contains("show")) {
    popup.classList.remove("show");
    clearTimeout(popupTimeout);
  }
  printPopUpMessage("Вы заработали 1 монету");
}

function printPopUpMessage(message) {
  var popup = document.getElementById("myPopup");
  var headerRight = document.querySelector(".header-right");
  var topPosition = headerRight.offsetHeight + 10;
  popup.style.top = `${topPosition}px`;
  popup.textContent = message;
  popup.classList.add("show");

  clearTimeout(popupTimeout);

  popupTimeout = setTimeout(function () {
    popup.classList.remove("show");
  }, 2000);
}
