// 13. Напишите функцию, которая вернет массив с группированными элементами исходных массивов.
//      Логика группировки:
//      первая группа состоит из всех первых элементов исходных массивов,
//      вторая группа - из вторых элементов и т.д.



function group(incomingArray1, incomingArray2, incomingArray3){

    let resultArray = new Array(...incomingArray1,...incomingArray2,...incomingArray3);

    return resultArray.map((x, index) => index % 3 == 0 && resultArray.slice(index, index + 3)).filter((x) => x)

}


console.log(group(['a', 'b'], [1, 2], [true, false]));
// [['a', 1, true], ['b', 2, false]]