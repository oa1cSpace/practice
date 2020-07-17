/**
 * Функция геттер, которая спустится по вложенности данных на основе указанного строкой ключа через точку
 * */

/*
B@RT, [17.07.20 14:11]
Предположим, есть переменная с глубокой вложенностью:

const obj = {
    arr1: ['a', 'b', 'c'],
    arr2: [
        {d: 1, e: 2}
    ],
};

нужно написать функцию, которая сможет спуститься по указанным ключам
(строчка разделенная точками) и вернуть значение.
если ключа нет, вернуть значения по умолчанию:

console.log( fn(obj, 'arr1.2') ) // 'c'
console.log( fn(obj, 'arr2.0.d') ) // 1
console.log( fn(obj, 'arr3') ) // null
console.log( fn(obj, 'arr3', false) ) // false


т.е. функция принимает первым аргументом переменную,
в которой будем искать ключи. если переменная не массив и не обьект - выходим

вторым аргументом передаем перечень ключей через точку в виде одной строчки. назовем это "путь"

третий аргумент (опциональный, равен null по умолчанию) - будет результатом ответа,
если нет значения по указанному "пути" или если исходная переменная не обьект или не массив

B@RT, [17.07.20 14:11]
для решения этой задачи, скорее всего, вам нужно будет посмотреть, что такое рекурсия
* */


const obj = {
    arr1: ['a', 'b', 'c'],
    arr2: [
        {d: 1, e: 2}
    ],
};

/*
function deepGet(data,path) {

    if (Array.isArray(data) || (typeof(data) === 'object' && data !== null)){

        return 'ok';

    }

    return null;

}

console.log(deepGet(obj));*/

function fn(obj, path = null, f = true) {
  const parts = path.split(".");
  if(typeof obj !== 'object') {
    return;
  }
  if (parts.length === 1) {
    return obj[parts[0]] || (f ? null : false)
  }
  return fn(obj[parts[0]], parts.slice(1).join("."), f);
}

console.log(fn(obj, 'arr1.2') ) // 'c'
console.log(fn(obj, 'arr2.0.d') ) // 1
console.log(fn(obj, 'arr3') ) // null
console.log(fn(obj, 'arr3', false) ) // false