// 17. Напишите функцию, которая перемешает массив в случайном порядке

function rnd(array) {
    return array.sort(() => Math.random() - 0.5);
}

console.log(rnd([1,2,3,4,5,6])); // [6,1,5,4,3,2]