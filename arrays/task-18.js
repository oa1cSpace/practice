// 18. Напишите функцию, которая вернет разницу двух массивов
//     (т.е. элементы, которых нет в исходных массивах)

const arr1 = [1, 2, 'a'];
const arr2 = [1, 2, 3, 4, 'b'];


function diff(incomingFirstArray, incomingSecondArray) {
    const resultArray = new Array(...incomingFirstArray,...incomingSecondArray);
    return resultArray.filter(function(value){
        return resultArray.indexOf(value) === resultArray.lastIndexOf(value);
    });
}

/*Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};*/

console.log(diff(arr1,arr2)) // [a,3,4,b]