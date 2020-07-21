// 18. Напишите функцию, которая вернет разницу двух массивов
//     (т.е. элементы, которых нет в исходных массивах)

const arr1 = [1, 2, 'a'];
const arr2 = [1, 2, 3, 4, 'b'];

// !!! смотреть в один массив и сравнивать со вторым !!!
/*
function diff(incomingFirstArray, incomingSecondArray) {

    return  incomingFirstArray.map( (value,index) => {
    });
}
*/


    function diff(arr1, arr2) {
        return arr1.concat(arr2).filter(function(val, index, arr){
            return arr.indexOf(val) === arr.lastIndexOf(val);
        });
    }


console.log(diff(arr1,arr2)) // [a,3,4,b]