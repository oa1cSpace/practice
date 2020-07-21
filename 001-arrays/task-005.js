//5. Напишите функцию, которая конкатенирует исходный массив с другими массивами или примитивными значениями

 const arr1 = [1];
 const arr2 = concatArray(arr1, 2, [3], [[4]]);

function concatArray(arr, ...arr2) {
    return arr.concat(...arr2);
}

 console.log(arr2); // [1, 2, 3, [4]]
 console.log(arr1); // [1]

