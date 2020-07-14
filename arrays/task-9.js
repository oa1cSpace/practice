// 9. Напишите функцию, которая вернет массив с всеми элементами исходного массива, кроме последней ячейки

function init(arr) {
    tempArr = arr.pop();
    return arr.slice();
}

const arr1 = [1,2,3,4];
const arr2 = init(arr1);

console.log(arr2); // [1,2,3]