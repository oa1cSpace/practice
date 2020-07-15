// 18. Напишите функцию, которая вернет разницу двух массивов
//     (т.е. элементы, которых нет в исходных массивах)

const arr2 = [1, 2, 'a'];
const arr1 = [1, 2, 3, 4, 'b'];

// смотреть в один массив и сравнивать со вторым !!!
function diff(arr1, arr2) {
    return arr1.concat(arr2).filter(function(val, index, arr){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

/*Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};*/

console.log(diff(arr1,arr2)) // [a,3,4,b]