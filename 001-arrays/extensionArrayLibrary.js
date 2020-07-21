

//--------------- 1 -------------

/**
 функция, которая берет массив объектов и
 возвращает массив значений определенного поля
 */


Array.prototype.pluck = function (field) {
    return this.map(it => it[field]);
}

// -- test --
/*const chars = [
    { 'name': 'tony', 'age': 20 },
    { 'name': 'feel', 'age': 30 }
];
console.log(chars.pluck('name'));*/

//--------------- 2 -------------

/**
 функция неглубокого копирования массива,
 учитывая, что исходный массив может быть произвольной длины,
 но не глубже массива в массиве
 * */



Array.prototype.aCopy = function () {
    return new Array(...this);
}

// -- test --
/*
const arr1 = [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']];
const arr2 = arr1.aCopy();
arr1.unshift(['z']);
console.log(arr1.aCopy(arr1)); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
console.log(arr2.aCopy(arr2)); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
*/







//------------- 3 ---------------

/**
 функция, которая принимает на входе массив и число,
 обозначающее размер группы, на которые нужно разделить исходный массив.
 */

Array.prototype.splitArray = function( chunks) {
    return this.map((x, i) => i % chunks == 0 && this.slice(i, i + chunks)).filter(x => x)
}

// -- test --
/*console.log(['a', 'b', 'c', 'd', 'e', 'f', 'test'].splitArray(2));*/




//------------- 4 ---------------


/**
 функция, которая удалит из массива все "отрицательные"
 типы данных (false, null, 0, "", undefined, NaN)
 */

Array.prototype.clearArray = function () {
    return this.filter((value) => Boolean(value));
}

// -- test --
/*console.log([1, 0, 2, false, '', 3].clearArray()); // [1, 2, 3]*/


//------------- 5 ---------------


/**
 функция, которая конкатенирует исходный массив с другими массивами или примитивными значениями
 * */

Array.prototype.concatArray = function (...incomingSecondArray) {
    return this.concat(...this);
}


// -- test --

/*
const someArray = [1];
console.log([someArray, 2, [3], [[4]]].concatArray());  // [ 1, 2, 3, [ 4 ] ]
console.log(someArray);                                 // [ 1 ]

*/

//------------- 6 ---------------

/**
 функция, которая удалит указанное кол-во элементов с начала исходного массива.
 Аргумент функции, который означает кол-во элементов, опциональный и равен 1 по умолчанию.
 Если элементов меньше, чем указанное кол-во для удаления - вернуть пустой массив
 */


Array.prototype.rm = function(arr,remove = 1){
    return [...this].slice(remove);
}

// -- test --
/*console.log([1, 2, 3].rm()); // [2, 3]*/


//------------- 7 ---------------

/**
 Аналогично 6, только удаление с конца массива
 * */

Array.prototype.rm = function(remove = 1){
    return [...this].reverse().slice(remove).reverse();
}

// -- test --
/*console.log([1, 2, 3].rm()); // [1, 2]
console.log([1, 2, 3].rm(2)); // [1]
console.log([1, 2, 3].rm(5)); // []
console.log([1, 2, 3].rm(0)); // [1, 2, 3]*/

//------------- 8 ---------------

/**
 функция, которая принимает массив, символ для замены,
 с какой ячейки начинать заменять и на какой остановиться.
 Если номера ячеек не заданы, то по умолчанию это начало и конец всего массива
 * */


Array.prototype.replaceIn = function (symbl, start = 0, end = this.length-1) {
     return this.map((item,index) => {
         return index >= start & index <= end ? symbl : item;
     });

}

// -- test --
/*const arr2 = [4, 6, 8, 10];
const arr2copy1 = arr2.replaceIn('*',1,2);
console.log(arr2copy1);                 //   ===> [4, '*', '*', 10]*!/*/


//------------- 9 ---------------

/**
 функция, которая вернет массив с всеми элементами исходного массива, кроме последней ячейки
 */

Array.prototype.incomingArray = function () {
    return  this.slice(0,this.length-1);
}

// -- test --
/*const arr1 = [1,2,3,4];
const arr2 = arr1.incomingArray();
console.log(arr2); // [1,2,3]*/


//------------- 10 ---------------

/**
 функция, которая вернет массив с всеми значениями,
 которые повторяются в исходном массиве
 */

Array.prototype.uni = function(){

    return this
        .filter((v, i, a) => a.indexOf(v) !== i)
        .sort()
};

// -- test --
/*const arr2 = [1,2,3,4,2,5,6,1,3].uni();
console.log(arr2); // [1,2,3]*/



//------------- 11 ---------------

/**
 функция, которая вернет элемент из массива по указанному индексу.
 Но если индекс отрицательный, то считаем с конца массива
 * */

Array.prototype.nfa = function (index) {
    let tempArray = new Array(...this);
    return index > 0 ? tempArray[index] : tempArray[index * -1];
}

// -- test --
/*const arr = ['a', 'b', 'c', 'd'];
console.log(arr.nfa(1)); // 'b'
console.log(arr.nfa(-2)); // 'b'*/


//------------- 12 ---------------

/**
считает сумму квадратных корней для всех чётных чисел внутри массива
 */

Array.prototype.sumMathSqForEven = function() {
    return this
        .filter(element => !(element % 2))
        .reduce((accumulator, element) => accumulator + Math.sqrt(element), 0)
}

// -- test --
/*const testArray = [1, 4, 3, 0, 4, 5, 4];
console.log(testArray.sumMathSqForEven())   // ==> 6*/


//------------- 13 ---------------

/**
 функция, которая вернет массив с группированными элементами исходных массивов.
 Логика группировки:
 первая группа состоит из всех первых элементов исходных массивов,
 вторая группа - из вторых элементов и т.д.
 * */

//   !!!!!!!  DOESN'T WORK PROPERLY !!!!!!!

/*
Array.prototype.group = function (...arg) {
     return [...arg].reduce((acc, curr) => {
        return [[ ...(acc[0] || []) , curr[0]], [...(acc[1] || []), curr[1]]]
    }, [])

}

// -- test --
console.log(group(['a', 'b'], [1, 2], [true, false])); // ==> [['a', 1, true], ['b', 2, false]]
*/

// ------------------- v 2.0
Array.prototype.group = function() {
    let arr = [];
    for(let i = 0; i < this[0].length; i++)  {
        let a = []
        this.forEach((items, index) => {
            a.push(this[index][i])
        })
        arr.push(a)
    }

    return arr;
};

// -- test --
/*let arr67 = [['a','b'], ['1','2'], [true,false]];
console.log(arr67.group());*/



//------------- 14 ---------------

/**
 функция которая преобразует массив в строку через указанный разделитель
 * */


Array.prototype.implode = function (separator) {
    return new Array(...this).join(separator);
}

// -- test --
/*const testArr = ['a','b','c'];
console.log(testArr.implode('-')); // 'a-b-c'*/


//------------- 15 ---------------

/**
 функция которая преобразует массив из чисел в строку через указанный разделитель,
 оставив только четные числа или не четные цифры,
 в зависимости от третьего аргумента (true - четные, false - нечетные)
 */

Array.prototype.implode2 = function (separator, boolArgument) {
    return new Array(...this)
        .filter(number => boolArgument ? !(number % 2) : (number % 2))
        .join(separator);
}

// -- test --
const testArr = [1,2,3,4,5,6,7,8,9];
/*console.log(testArr.implode2(':', true)); // '2:4:6:8'
console.log(testArr.implode2('*', false)); // '1*3*5*7*9'*/

//------------- 16 ---------------

/**
 функция, которая найдет високосные года в указанном диапазоне дат
 * */

Array.prototype.findYear = function (start, end) {

    for (let i = start; i <= end; i++) {
        if (i % 4 === 0) {
            this.push(i);
        }
    }
    return this;
}

// -- test --
/*let result = [];
console.log(result.findYear(2000,2018)); // [2000,2004,2008,2012,2016]*/


//------------- 17 ---------------

/**
 функция, которая перемешает массив в случайном порядке
 * */

Array.prototype.rnd = function () {
    let j,temp;
    for(let i = this.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
}

// -- test --
/*let testArr2 = [1,2,3,4,5,6];
console.log(testArr2.rnd());*/



//------------- 18 ---------------

/**
 функция, которая вернет разницу двух массивов
(т.е. элементы, которых нет в исходных массивах)
 * */

Array.prototype.diff = function (arr2) {
     return this.concat(arr2).filter(function(val, index, arr){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

// -- test --
/*const arr1 = [1, 2, 'a'];
const arr2 = [1, 2, 3, 4, 'b'];
console.log(arr1.diff(arr2)) // [a,3,4,b]*/


//------------- 19 ---------------

/**
 функция, которая сортирует массив по убыванию
 * */
Array.prototype.sortDownUp = function (){
    return this.sort();
}

// -- test --
/*const arr219 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr219.sortDownUp()); // [-4,1,2,3,3,5,6,7,8]*/


//------------- 20 ---------------

/**
 функция, которая вернет самый частый элемент массива
 * */

Array.prototype.mostCommonElement = function() {

        let resultArray = new Array(...this);
        resultArray.sort(), most = [undefined , 0], counter = 0;
        resultArray.reduce(function (old,chr) {
           old == chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1)

           return chr;
       });

       return (most[0]);
    }

// -- test --
/*
 const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];
console.log(arr.mostCommonElement());
*/
