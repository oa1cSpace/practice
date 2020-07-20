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

/*

const obj = {
    arr1: ['a', 'b', 'c'],
    arr2: [
        {d: 1, e: 2}
    ],
};

function deepGet(data,path) {
    if (Array.isArray(data) || (typeof(data) === 'object' && data !== null)){

        return 'OK!';
    }

    return null;
}

console.log(deepGet(obj));
*/

// --- ---

const obj = {
    arr1: ['a', 'b', 'c'],
    arr2: [
        {d: 1, e: 2}
    ],
};

const obj2 = [
    [
        [1]
    ]
];

function fn(value, path = null, f = true) {
    const parts = path.split(".");
    console.log('path ==> ' + path);
    console.log('parts ==> ' + parts);
    const key = parts[0];  //"string" arr1 // 2
    console.log('key = parts[0] ==> ' + key);

    if (typeof value === 'object'){
        console.log('parts.length ==> '+ parts.length)
        if( parts.length === 1 ){ // parts.length = 2
            console.log('value[parts[0]] ==> '+value[parts[0]] || (f ? null : false));
            return value[parts[0]] || (f ? null : false);
        }

        const result = value[key] || null;
        console.log('result = value[key]  ==> ' + result);

        if (parts.length > 1){
            console.log('if (parts.length > 1)');
            console.log('fn recursion ==> '+fn(value[parts[0]], parts.slice(1).join("."), f));
            return fn(value[parts[0]], parts.slice(1).join("."), f);  // 2
        }

        console.log('!parts.length > 1 ==> ' +result)
            return result;

    }
    console.log('final return ==> ' + f);
    return f;
}

console.log( fn(obj, 'arr1.2') ) // 'c'
console.log('---')
console.log( fn(obj, 'arr1.0') ) // 'a'
console.log('---')
console.log( fn(obj, 'arr2.0.d') ) // 1
console.log('---')
console.log( fn(obj, 'arr3') ) // null
console.log('---')
console.log( fn(obj, 'arr3', false) ) // false
console.log('---')
console.log( fn(obj2, '0.0.0', false) ) // 1
console.log('---')