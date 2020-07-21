/**
 * Функция для конвертации короткой записи hex цвета в полную (#05а => #0055aa)
 * */

const testShortHex = '#05а';
const test1 = '#dr5';
const test2 = '#qwe';
const test3 = '#1q2';

function shortHexToFull(incomingString)
{

    for (let i=1; i<incomingString.length; i++){

        return '#'+incomingString
            .charAt(i).repeat(2)
            .concat(incomingString
            .charAt(i+1).repeat(2)
            .concat(incomingString
            .charAt(i+2).repeat(2)));
    }
}

console.log(shortHexToFull(testShortHex));
console.log(shortHexToFull(test1));
console.log(shortHexToFull(test2));
console.log(shortHexToFull(test3));


