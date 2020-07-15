// 11. Напишите функцию, которая вернет элемент из массива по указанному индексу.
//      Но если индекс отрицательный, то считаем с конца массива

const arr = ['a', 'b', 'c', 'd'];

function nfa(incomingArray, index){
    let tempArray = new Array(...incomingArray);

    /*if(index > 0) {
        let positive = (tempArray[index]);

        return positive;
    }

    index = (index * -1);
    let negative = (tempArray[index]);

    return negative;*/

    return index > 0 ? tempArray[index] : tempArray[index * -1];


}

console.log(nfa(arr, 1)); // 'b'
console.log(nfa(arr, -2)); // 'c';