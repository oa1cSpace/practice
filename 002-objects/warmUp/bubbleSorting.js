/**
 * Сортировка массива пузырьком
 * */

const someUnsortedArray = [100500,1,5,56,7,8,9,0,-2,5];
console.log('ORIGINAL: ' + someUnsortedArray);

function bubbleGum(incomingArray) {
    let swap;
    do{
        swap = false;
        for(let i = 0; i < incomingArray.length; i++){
            let tempBox;
            if(incomingArray[i] > incomingArray[i+1]){
                tempBox = incomingArray[i+1];
                incomingArray[i+1] = incomingArray[i];
                incomingArray[i] = tempBox;
                swap = true;
            }
        }
    } while (swap);

    return incomingArray;
}

console.log('SORTED: ' + bubbleGum(someUnsortedArray));
console.error('check ==> ' + Array.isArray(bubbleGum(someUnsortedArray)));



// -- V 2.0 (ALPHA)

/*

function bubbleGum(incomingArray) {
    return incomingArray.map((value, index) => {
        let temp;

        if(value[index] > value[index + 1]){
            temp = value[index + 1];
            value[index + 1] = value[index];
            value[index] = temp;

            return  value[index];
        }

        return value;
    });
}

console.log(bubbleGum(someUnsortedArray));
*/
