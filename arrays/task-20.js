// 20. Напишите функцию, которая вернет самый частый элемент массива

//const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];

function fn(incomingArray) {
    let  resultArray = new Array(...incomingArray);
     resultArray.sort(), most = [undefined , 0], counter = 0;
    resultArray.reduce(function (old,chr) {
        old == chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1)
        return chr;
    });
    return ( '\'' +  most[0] + '\'' + " ( "+most[1]+" times )");
}

console.log(fn(arr)); // 'z'