const startBtnElem = document.querySelector('button[data-start]');
const stopBtnElem = document.querySelector('button[data-stop]');
stopBtnElem.disabled = true;

startBtnElem.addEventListener('click', startChangingBgColor);
stopBtnElem.addEventListener('click', stopChangingBgColor);

let timerId;

function startChangingBgColor(event) {
  timerId = setInterval(changeBodyColor, 1000);
  startBtnElem.disabled = true;
  stopBtnElem.disabled = false;
}

function stopChangingBgColor(event) {
  clearInterval(timerId);
  startBtnElem.disabled = false;
  stopBtnElem.disabled = true;
}

function changeBodyColor() {
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
}

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
