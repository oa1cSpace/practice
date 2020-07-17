/**
 * Дедупликация массива
 * */

/*const arr = [1,2,3,4,5,3,4,5,6,7,1,2,3,4,5,6,7]; // Массив перед дедупликацией
let endArr = []; // Массив после дедупликации

endArr = arr.filter(
	function(element,index,self){

		return self.indexOf(element) === index;
	}
);

console.log(endArr);
console.error('check ==> ' + Array.isArray(endArr));
console.log('----');*/



// -- V 2.0 with SET ==>
// Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
console.error('check ==> ' + Array.isArray([new Set([...arr])]));
console.log([...new Set([...arr])]);
