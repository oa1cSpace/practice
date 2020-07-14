// 8. Написать функцию, которая принимает массив, символ для замены,
// с какой ячейки начинать заменять и на какой остановиться.
// Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива



const arr1 = [1, 2, 3];

function replaceIn(arr, symbolToChange, boxStartPosition = arr[0], boxEndPosition = arr[arr.length-1]) {
    const result = arr.splice(boxStartPosition, 0, symbolToChange);
    return result;
}

const arr1copy1 = replaceIn(arr1, 'a');
console.log(arr1copy1); // ['a', 'a', 'a']

/*const arr1copy2 = replaceIn(arr1, 2);
console.log(arr1copy2); // [2, 2, 2]*/

/*
const arr2 = [4, 6, 8, 10];
const arr2copy1 = replaceIn([4, 6, 8, 10], '*', 1, 2);
console.log(arr2copy1); // [4, '*', '*', 10]*/
