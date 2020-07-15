// 4. Напишите функцию, которая удалит из массива все "отрицательные"
// типы данных (false, null, 0, "", undefined, NaN)

const invalid = [false,null,'0','\"\"', undefined, NaN];

function clearArray(arr) {
    return  arr.filter ((v) =>new Boolean(v));
}


const arr1 = clearArray([1, 0, 2, false, '', 3]);

console.log(arr1); // [1, 2, 3]