
//Флажок Легаси




"use strict";

//Модель документа, объектная модель документа
// Нода - узел 

//Поиск элементов:
// console.dir(document.getElementById("id-test"));
// console.dir(document.getElementsByClassName("test-class"));
// console.dir(document.getElementsByTagName("p"));
//Все, что возвращается во множественном числе, всегда возвращает коллекцию
// Коллекцию можно перебрать через цикл for/for of/for in
//поиск конкретной зависимости
// Для более сложного поиска
// console.log(document.querySelector('.test-class'));
console.dir(document.querySelector('.test-class:last-child'));
console.dir(document.querySelectorAll('.test-class:last-child'));
//возвращают массив и больше похоже на массив, поскольку есть метод форич
// const pTags = document.querySelectorAll('p');
// console.log(pTags);
// pTags.forEach(element => {
//     console.log(element);
// });

//Доступ к содержимому тега
let h1Tags = document.querySelector('h1');
console.log(h1Tags.textContent); //выводит исключительно только текст+содержимое неотображаемых тегов
console.log(h1Tags.innerText); //выводит исключительно только текст
console.log(h1Tags.innerHTML); //выводит еще html строку, из-за парсинга очень дорогое свойство, имеет геттеры и сетторы
h1Tags.textContent += " вот такие вот дела";
h1Tags.textContent += "<i>!</i>";
h1Tags.innerHTML += "<i>!</i>"; //тут распарсилось и вернулось, как узлы дом дерева

console.log(h1Tags.textContent); //выводит исключительно только текст+содержимое неотображаемых тегов
console.log(h1Tags.innerText); //выводит исключительно только текст
console.log(h1Tags.innerHTML); // для изменения разметки, ресурсозатратный товарищщ

// let stript = document.querySelector('script');
// console.log(stript.textContent); //текст контент используем для текстового изменения
// console.log(stript.innerText); //
// в целом различий между innerText и textContent нет, но якобы innerText не имеет доступа и следовательно не отображает теги, которые не отображаются в браузере


// // Bad - пример плохого добавления кода html
//Такой способ перетирает обработчики событий
// for (let i = 0; i < 10; i++) {
//     document.getElementById('demo').innerHTML += `<div>Block ${i}</div>`;
//     // на каждой итерации мы обращаемся и ищем, перебираем все ДОМ дерево, считываем все содержимое 
//     // innerHTML дерева, преобразуем его в строку, добавляем кусочек строки
//     // прогрессивная нагрузка, чем больше мы будем делть итераций, тем медленне будет отрабатывать innerHTML
// }

// Good
// ограничимся одним запросом на поиск и одним запросом на чтение и запись
// let totalHTMLString = '';
// // операции с примитивами самые быстрые и дешевые
// for (let i = 0; i < 10; i++) {
//     totalHTMLString += `<div>Block # ${i}</div>`;
// }
// document.getElementById('demo').innerHTML = totalHTMLString;

const h1Tag = document.querySelector('h1');
h1Tag.style.backgroundColor = 'yellow';
console.log(h1Tag.style)
// этот атрибут работает и на чтение и на запись
//но свойство стайл не работает с классами

//теперь стили классы
//Дайка мне посчитанные стили
console.log(getComputedStyle(h1Tag)); //актуально состояние стилей  у конкретного тега

// Работа с классами
// Получаем классы определенного тега
// h1Tag.className = 'myClass second';
// console.log(h1Tag.className);
// h1Tag.classList.add('myClass');
// h1Tag.classList.remove('myClass');
// h1Tag.classList.toggle('hidden');
// console.log(h1Tag.classList);
// console.log(h1Tag.classList.contains('hidden'));


//Создание элементов, можно через innerHTML, но это старый легаси способ и его лучше не использовать
//Его лучше использовать для больших, аккумулированных кусков кода. Это решение номер один из примера Good practise выше
// const myDiv = document.createElement('div'); //сиротка элемент, который никуда еще не внедрен
// const i = document.createElement('i');
// myDiv.appendChild(i); //помещаем тег i внутрь div
// div можно поместить внутрь body также через appendChild
// i.textContent = 'Hello world!'; //Я хочу, чтобы в диве был наклонный текст Helloworld
// console.log(myDiv, i);
// document.body.appendChild(myDiv);
// Замена коду выше. Код выше тоже легаси
// document.body.insertAdjacentHTML('beforebegin', '<div><i>Hello World!</i></div>');
// document.body.insertAdjacentHTML('afterbegin', '<div><i>Hello World!</i></div>');
// document.body.insertAdjacentHTML('beforeend', '<div><i>Hello World!</i></div>');
// document.body.insertAdjacentHTML('afterend', '<div><i>Hello World!</i></div>');
//аналог jx для реакта
// Мы обращаемся тут к конкретному узлу 
// тут мы оперируем конкретным узлом и меняем ему координаты, зависимости ( не поменяли родителя, но поменялись соседи)
// const h1Tag = document.querySelector('h1'); //дочерний элемент ПЕРЕНЕСЕТ
// const h1Tag = document.querySelector('h1').cloneNode(true);//дэ СКОПИРУЕТ
// const parentElement = document.querySelector('#id-test'); //родительский элемент
// const refElement = document.querySelector('.test-class:last-child');
// parentElement.insertBefore(h1Tag, refElement); //1-ый - что, 2-ой - куда *перед чем)
// сюда в parentElement добавь h1Tag перед refElement
// класс через .
// тег без всего
// айдишник через #

//Удаление ЭЛЕМЕНТА
// const h1Tag = document.querySelector('h1');
// h1Tag.remove(); // не совсем полностью удаляет, перестает отображаться , но он есть
// h1Tag.parentElement.removeChild(h1Tag); //легаси способ
// document.body.innerHTML = '';
//childNode()

//ВАЖНО, методы выше есть не только у document, но и у остальных элементов разметки и поэтому 
// для более узкого поиска мы можем применять к ним те же методы
document.body.querySelectorAll('.test-class:last-child');
//Все наследуется
// Не нужно каждый раз обращаться к городу - document, можно все искать продолжать в одном подъезде и не обращаться лишний раз к городу
// манипуляции с ДОМ ВСЕГДА ДОРОГИЕ МАНИПУЛЯЦИИ




//Обработка событий
function sayHello() {
    alert('Hello!');
    alert('Bye!');
    // hello();
    // bye();
}


function hello() {
    alert('Hellooooo!');
}


function bye() {
    alert('Byeeeeeeeeeeeeeeee!');
}

const myBtn = document.querySelector('.my-btn');
// // myBtn.onclick = sayHello; //не вызывает функцию, а просто ее передаем
// myBtn.onclick = hello;
// Обрабатывает единственное событие, обрабатывает кнопку только 1 раз
// myBtn.onclick = bye; //перезапишется и будет только отрабатывать функция bye

//Альтернатива
// myBtn.addEventListener('click', hello);
// myBtn.addEventListener('click', bye);
// myBtn.addEventListener('click', function () {  // первый аргумент - тип события
//     console.log('foo');
// });     // второй аргумент - сам обработчик

//Все события произойдут при одном нажатии
myBtn.addEventListener('click', sayHello);
myBtn.addEventListener('click', bye);
myBtn.removeEventListener('click', bye);
myBtn.addEventListener('click', function () {
    alert('foo');
});
myBtn.removeEventListener('click', function () { //функция не удалится, поскольку инициализируются две разные функции
    alert('foo'); //поэтому обработчики нужно заранее где то сохранить (ссылку)- ссылочный тип данных
});

//События связанные с обработкой документа
window.addEventListener('load', function () { //событие говорит о том, что все ресурсы загружены, скрипты и разметка готовы
    //...
});
document.addEventListener('DOMContentLoaded', function () { //срабатываем раньше чем load, после того как будет создано дом дерево, загрузка ресурсов не важна
    //...
});
window.addEventListener('beforeunload', function () { //

    //...
})
//beforeunload - для мусора и вируса и спама. События паразиты, навящивая реклама
//BeforeClose - для мусора и вируса и спама. События паразиты, навящивая реклама