// 10. Напишите функцию, которая вернет массив с всеми значениями,
//      которые повторяются в исходном массиве


// not effective !!!!
function uni(arr){
    return arr.filter((v, i, a) => {
        return a.indexOf(v) !== i
    }).sort();
}

// try with MAP !


const arr1 = [1,2,3,4,2,5,6,1,3];
const arr2 = uni(arr1);

console.log(arr2); // [1,2,3]