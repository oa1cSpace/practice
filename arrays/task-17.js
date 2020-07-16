// 17. Напишите функцию, которая перемешает массив в случайном порядке

/*function rnd(array) {
    return array.sort(() => Math.random() - 0.5);
}*/

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