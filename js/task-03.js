const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Используй массив объектов images для создания элементов <img> вложенных в <li>.
//Все элементы галереи должны добавляться в DOM за одну операцию вставки.

const list = document.querySelector('.gallery');

const elementsGallery = images.map(img => 
`<li><img src=${img.url} width='480' height='300'alt=${img.alt}></img></li>`).join('');

//Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
list.insertAdjacentHTML("beforeend", elementsGallery);

//Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
list.style.display = 'flex';
list.style.listStyle = 'none';
list.style.gap = '30px';
list.style.alineItems = 'center';
list.style.justifyContent = 'center';


