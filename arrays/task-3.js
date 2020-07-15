// 3. Напишите функцию, которая принимает на входе массив и число,
// обозначающее размер группы, на которые нужно разделить исходный массив

// REWRITE FUNCTION !!!
function splitArray(arr,chunks) {
  return arr.map((x, i) => i % chunks == 0 && arr.slice(i, i + chunks)).filter(x => x)
}

const arr1 = splitArray(['a', 'b', 'c', 'd', 'e', 'f', 'test'], 2);

console.log(arr1); // [['a', 'b'], ['c', 'd'], ['e', 'f']]