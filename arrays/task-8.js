// 8. Написать функцию, которая принимает массив, символ для замены,
// с какой ячейки начинать заменять и на какой остановиться.
// Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива



const arr1 = [1, 2, 3];
/*
function replaceIn(arr, item, boxStartPosition = 0, ) {
    const result = arr1.map(item => item);
    return result;
}*/


function replaceIn(arr, symbl, start = 0, end = arr.length-1 ) {
    return arr.map((item,index) => {
        /*if (index >= start & index <= end ){
            return symbl;
        }
        return item;*/

        return index >= start & index <= end ? symbl : item;




    });
}



/*
if (a===0){
    b = 1;
}else{
    b = 2;
}

b = (a === 0) ? 1 : 2;*/

/* const arr1copy1 = replaceIn(arr1,'a');
 console.log(arr1copy1); // ['a', 'a', 'a']*/


 /*const arr1copy1 = arr1.map(item => item  = '2');
 console.log(arr1copy1); // ['a', 'a', 'a']
*/
/*

const arr1copy1 = replaceIn(arr1, 'a');
console.log(arr1copy1); // ['a', 'a', 'a']
*/

/*const arr1copy2 = replaceIn(arr1, 2);
console.log(arr1copy2); // [2, 2, 2]*/

const arr2 = [4, 6, 8, 10];
const arr2copy1 = replaceIn([4, 6, 8, 10], '*', 1, 2);
console.log(arr2copy1); // [4, '*', '*', 10]
