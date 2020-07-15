// 14. Напишите функцию которая преобразует массив в строку через указанный разделитель

const arr = ['a','b','c'];

function implode (incomingArray, separator) {
    return new Array(...incomingArray).join(separator);

}

console.log(implode(arr, '-')); // 'a-b-c'