// 18. Напишите функцию, которая вернет разницу двух массивов
//     (т.е. элементы, которых нет в исходных массивах)

const arr1 = [1, 2, 'a'];
const arr2 = [1, 2, 3, 4, 'b'];

// смотреть в один массив и сравнивать со вторым !!!
function diff(incomingFirstArray, incomingSecondArray) {
    return incomingFirstArray.map( (value,index) => {
        incomingSecondArray.forEach(function (item) {
            if (value != item){
                return value;
            }
        })



    });

}

console.log(diff(arr1,arr2)) // [a,3,4,b]