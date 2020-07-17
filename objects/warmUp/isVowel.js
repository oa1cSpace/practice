/**
 * Поиск гласных в строке
 * */

const str = 'фавылоыиваопи';

function isVowel(incomingString) {

    return [...new Set(incomingString.replace(/[^аеёиоуыэюя]/ig, ''))];
}

console.log(isVowel(str));