// 8. Написать функцию, которая принимает массив, символ для замены,
// с какой ячейки начинать заменять и на какой остановиться.
// Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива



const arr1 = [1, 2, 3];

function replaceIn(arr, symbl, start = 0, end = arr.length-1 ) {
    return arr.map((item,index) => {
        /*if (index >= start & index <= end ){
            return symbl;
        }
        return item;*/

        return index >= start & index <= end ? symbl : item;

    });
}

const arr2 = [4, 6, 8, 10];
const arr2copy1 = replaceIn([4, 6, 8, 10], '*', 1, 2);
console.log(arr2copy1); // [4, '*', '*', 10]
