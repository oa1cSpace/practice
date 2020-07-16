// 15. Напишите функцию которая преобразует массив из чисел в строку через указанный разделитель,
//      оставив только четные числа или не четные цифры,
//      в зависимости от третьего аргумента (true - четные, false - нечетные)

const arr = [1,2,3,4,5,6,7,8,9];

/*function implode(incomingArray, separator, boolArgument){

    let resultArray = new Array(...incomingArray);

     if (boolArgument == true) {
         resultArray.filter(number => !(number % 2)).join(separator);
        return resultArray;
    } else {
         resultArray.filter(number => (number % 2)).join(separator);
        return  resultArray
    }
    ;
}*/

function implode (incomingArray, separator, boolArgument) {



    /*if (boolArgument) {
       return resultArray.filter(number => !(number % 2)).join(separator);
    }
    else {
        return resultArray.filter(number => (number % 2)).join(separator);
    }*/

    return new Array(...incomingArray)
        .filter(number => boolArgument ? !(number % 2) : (number % 2))
        .join(separator);

}


console.log(implode(arr, ':', true)); // '2:4:6:8'
console.log(implode(arr, '*', false)); // '1*3*5*7*9'