// 6. Напишите функцию, которая удалит указанное кол-во элементов с начала исходного массива.

// Аргумент функции, который означает кол-во элементов, опциональный и равен 1 по умолчанию.
// Если элементов меньше, чем указанное кол-во для удаления - вернуть пустой массив


/*function rm(arr, remove = 1){

    if(remove < arr.length){
        for(let i = 0; i < remove; i++){
            arr.shift();
        }
    } else {
        return arr = new Array();
    }
    return  arr;
}*/

function rm(arr, remove = 1) {
    arr.splice(0, remove);
    return arr;
}

console.log(rm([1, 2, 3])); // [2, 3]

console.log(rm([1, 2, 3], 2)); // [3]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]