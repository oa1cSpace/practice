/**
 * Проверка, что строка является анаграммой другой строки
 * */

const anagr1 = ('test');
const anagr2 = ('seTt');

const anagr3 = ('test');
const anagr4 = ('LOL');

const anagr5 = ('asdf');
const anagr6 = ('qwer');

function buildCharObj(incomingString) {
    const charObj = {};
    incomingString = incomingString.toLowerCase().replace(/[^\w]/g);
    for (let char of incomingString){
        charObj[char] = charObj[char] + 1 || 1;
    }

    return charObj;
}

function isAnagramma(strA, strB) {
    const aCharObj = buildCharObj(strA);
    const bCharObj = buildCharObj(strB);

    if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
        return 'different length!';
    }

    for (let char in aCharObj){
        if (aCharObj[char] !== bCharObj[char]){
            return 'NO';
        }
    }
    return 'YES';
}

console.log(isAnagramma(anagr1,anagr2));
console.log(isAnagramma(anagr3,anagr4));
console.log(isAnagramma(anagr5,anagr6));




/*const anagramm1 = ('qwertY');
const anagramm2 = ('ytrEwq');


function isAnagramma(str1, str2) {
    const result = (a,b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();

    if (result(str1,str2)){

        return 'YES';
    }
    return 'NO';
}

console.log(isAnagramma(anagramm1,anagramm2));*/


