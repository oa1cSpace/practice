// 20. Напишите функцию, которая вернет самый частый элемент массива

const arr = [7, 'z', 'z', 'z', 3, 7, 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'z', 7, 'z', 3, 5, 9, 7];

function fn(incomingArray) {
    let resultArray = new Array(...incomingArray);
    let most = [undefined, 0];
    let counter = 0;

    resultArray.sort();
    resultArray.reduce(function (old, chr) {

        if (old === chr) {
            let cc = ++counter;

            if (cc > most[1]) {
                most = [chr, counter];
            }
        } else {
            counter = 1
        }

        // old == chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1)
        return chr;
    });
    return (most[0] + " ( " + most[1] + " times )");
    //return ( '\'' +  most[0] + '\'' );
}

console.log(fn(arr)); // 'z'