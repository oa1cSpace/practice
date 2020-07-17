/**
 * Определения числа Фибоначи
 * */

//  0 1 2 3 4 5 6  7  8  9  10 ...
//  1 1 2 3 5 8 13 21 34 55 89 ...

function fibo(num) {
    let fiboNum1=0, fiboNum2=1, currentFibo = 1;
    for (let i=1; i<=num; i++){
        currentFibo = fiboNum1 + fiboNum2;
        fiboNum1 = fiboNum2;
        fiboNum2 = currentFibo;
    }

    return currentFibo;
}

console.log(fibo(5))  //  8
console.log(fibo(55))  //  225851433717
console.log(fibo(555))  //  7.041139955842341e+115
