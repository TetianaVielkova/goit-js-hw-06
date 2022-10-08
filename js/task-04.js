//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const displayValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');


buttonDecrement.addEventListener('click', () => {
    counterValue --;
	displayValue.textContent = counterValue;
})

buttonIncrement.addEventListener('click', () => {
    counterValue ++;
	displayValue.textContent = counterValue;
});

