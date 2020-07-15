// 12. Напишите решение в одну строчку,
//      которое считает сумму квадратных корней для всех чётных чисел внутри массива


console.log(
    [1, 4, 3, 0, 4, 5, 4].filter(element => !(element % 2)).reduce((accumulator, element) => accumulator + Math.sqrt(element), 0)
); // 6