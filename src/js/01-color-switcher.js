const startBtnRef = document.querySelector('button[data-start]')
const stopBtnRef = document.querySelector('button[data-stop]')
const bodyRef = document.querySelector('body')



startBtnRef.addEventListener('click', onStartClickHandler)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartClickHandler() {
    bodyRef.style.backgroundColor = getRandomHexColor()
}