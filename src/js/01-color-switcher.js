const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStartClickHandler);
stopBtnRef.addEventListener('click', onStopClickHandler);

let isIntIsSet;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartClickHandler() {
  startBtnRef.setAttribute('disabled', true);
  isIntIsSet = setInterval(changeColorInt, 1000);
}

function changeColorInt() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function onStopClickHandler() {
  if (!isIntIsSet) {
    return;
  }
  clearInterval(isIntIsSet);
  startBtnRef.removeAttribute('disabled', true);
}
