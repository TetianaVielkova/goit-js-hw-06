//Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
//проверяет его содержимое на правильное количество введённых символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length <= validationInput.getAttribute('data-length')) {
        validationInput.classList.add('valid')
    } else {
        validationInput.classList.add('invalid')
    }
})

