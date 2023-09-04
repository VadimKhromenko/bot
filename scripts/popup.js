let popupTimeout;
let currentNumber = parseInt(localStorage.getItem("currentNumber")) || 0;
const SHOW = "show";
const MY_POPUP = "myPopup";

export function hidePopup(popup) {
  console.log("hide popup");
  return new Promise((resolve) => {
    if (popup.classList.contains("show")) {
      popup.classList.remove("show");
      clearTimeout(popupTimeout);
    }
    setTimeout(() => {
      resolve();
    }, 170);
  });
}

export function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}
