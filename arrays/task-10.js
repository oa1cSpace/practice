// 10. Напишите функцию, которая вернет массив с всеми значениями,
//      которые повторяются в исходном массиве

function uni(arr){
let result = [];

  for (let temp of arr) {
    if ( !result.includes(temp) ) {
      result.push(temp);
    }
  }
    return result;
}

const arr1 = [1,2,3,4,2,5,6,1,3];
const arr2 = uni(arr1);



console.log(arr2); // [1,2,3]