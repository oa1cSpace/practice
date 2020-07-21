// 17. Напишите функцию, которая перемешает массив в случайном порядке

/*function rnd(array) {
    return array.sort(() => Math.random() - 0.5);
}*/


/**
Суть алгоритма, если перевести с JS на русский, следующая:
берём последний элемент и меняем его местами со случайно выбранным элементом не правее его
(в том числе, возможно, и с ним самим).
Затем повторяем ту же операцию для предпоследнего элемента,
потом для предпредпоследнего и так далее.
*/

function rnd(inputArray){
    let j, temp;
    for(let i = inputArray.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = inputArray[j];
        inputArray[j] = inputArray[i];
        inputArray[i] = temp;
    }
    return inputArray;
}

console.log(rnd([1,2,3,4,5,6])); // [6,1,5,4,3,2]