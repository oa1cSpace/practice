// 1. Напишите функцию, которая берет массив объектов и
//      возвращает массив значений определенного поля:

    const chars = [
        { 'name': 'tony', 'age': 20 },
        { 'name': 'feel', 'age': 30 }
    ];

function pluck(arr, value){
    return arr.map(el => el[value]);
}

console.log(pluck(chars, 'name')); // ['tony', 'feel']


