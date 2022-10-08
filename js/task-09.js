//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике
// на button.change-color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');
const bodyBg = document.querySelector('body');


buttonChangeColor.addEventListener('click', (event) => {
  const color = getRandomHexColor();
  bodyBg.style.backgroundColor = color;
  nameColor.textContent = color;
}); 


