
//Посчитает и выведет в консоль количество категорий в 
//ul#categories, то есть элементов li.item.

const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, categoriesEl.length);

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в 
//консоль текст заголовка элемента (тега <h2>) и количество элементов в 
//категории (всех вложенных в него <li>).

categoriesEl.forEach((element) => {
    //const titleItemEl = element.querySelector('h2').textContent;
    //const firstElementUnderThisName = element.querySelectorAll('li');

    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
    });
