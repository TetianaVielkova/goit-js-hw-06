//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
//подставляет его текущее значение в span #name-output. 
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

function onTextChange(event) {
    if (event.currentTarget.value !== '') {
        nameOutputRef.textContent = event.currentTarget.value;
    } else {
        nameOutputRef.textContent = 'Anonimous';
    }
}

nameInputRef.addEventListener('input', onTextChange);

