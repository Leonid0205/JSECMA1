// 1. Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2. Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(counter) {
    return {
        getCounter: () => { return counter },
        increment: () => counter = counter - 1,
        decrement: () => counter = counter + 1
    }
};
let counter = createCounter(4);
console.log(counter.getCounter());
console.log(counter.increment());
console.log(counter.decrement());

// 3. Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

let targetElem = [];
function findElementByClass(rootEL, className) {
    if (root.hasChildNodes()) {
        for (let elem of rootEL.children) {
            if (elem.className === className) {
                targetElem.push(elem);
                if (targetElem[0].className !== className) {
                    targetElem = [];
                    targetElem.push(elem);
                }
            }
            findElementByClass(elem, className);
        }
    }
    return targetElem[0];
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);