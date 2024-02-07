// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener("DOMContentLoaded", () => {
    console.log('все теги прогрузились');
});


// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", () => {
    console.log('страница загрузилась');
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener('click', (el) => {
    if (el.target.className === 'super__element') {
        console.log(`Класс "super__element" присутсвует в элементе ${el.target.localName}`);
    } else {
        console.log(`Класс "super__element" отсутсвует в элементе ${el.target.localName}`);
    }
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

document.addEventListener('mouseover', (el) => {
    if (el.target.localName === 'textarea') {
        console.log('Вы навели на textarea.');
    }
});

// 5. Необходимо повесить событие клика на тег ul.
// В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик.
// Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulElem = document.querySelector('ul');
ulElem.addEventListener('click', (el) => {
    console.log(el.target.innerText);
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul?

//Ответ: Это происходит потому что, в 3 задании мы получаем событие по всей странице. А то что текст из 5 задания прописывается раньше чем из 3, 
//обусловленно тем что, при событии нажатии мыши происходит следующий порядок mousedown  -> mouseup  -> click.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liElem = document.querySelectorAll('li');
for (let i = 1; i < liElem.length; i += 2) {
    liElem[i].style.backgroundColor = 'green';
}