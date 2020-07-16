// 7. Аналогично заданию 6, только удаление с конца массива

function rm(arr, remove = 1) {

    return  [...arr].reverse().slice(remove ).reverse();
}

console.log(rm([1, 2, 3]));            // [1, 2]

console.log(rm([1, 2, 3], 2)); // [1]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]