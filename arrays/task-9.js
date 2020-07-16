// 9. Напишите функцию, которая вернет массив с всеми элементами исходного массива, кроме последней ячейки


// use slice or splice ....
function init(incomingArray) {
    return  incomingArray.slice(0,incomingArray.length-1);
}

const arr1 = [1,2,3,4];
const arr2 = init(arr1);

console.log(arr2); // [1,2,3]