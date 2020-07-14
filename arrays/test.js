//Создание массива
const  fruits = ['Яблоко', 'Банан'];
console.log(fruits.length);

//Доступ к элементу массива по индексу
let first = fruits[0];
console.log(first);

//Итерирование по массиву
fruits.forEach(function(item, index) {
  console.log(item, index);
});

const arrCopy = fruits.slice();
console.log('From arrCopy >: ' + arrCopy[0]);