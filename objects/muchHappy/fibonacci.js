/**
 * Определения числа Фибоначи
 * */


function fn(num) {
    //let counter=0;
     if(num < 2) {
        // console.log('STEP=1');
         return num;
     }
    //console.log('STEP=2 '+' [counter]: '+ counter+fn(num - 1) + fn(num - 2));
    //counter++;
     return fn(num - 1) + fn(num - 2);
 }

 //console.log( fn(4) ) // 3
 //console.log( fn(7) ) // 13
 console.log( fn(5) ) // 233