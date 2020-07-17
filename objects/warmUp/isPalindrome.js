/**
 * Проверка, что строка является палиндромом
 * */

const test1 = 'adfsddfddsfda';
const test2 = 'qwerty';
const test3 = 'qwerty.ytrewq';
const test4 = 'Qwerty.YtreWq';
const test5 = 'QwErTy';

function isPalindrome(incomeString) {
    return incomeString.toLowerCase().split('').reverse().join('') == incomeString.toLowerCase() ;
}

console.log(isPalindrome(test1));
console.log(isPalindrome(test2));
console.log(isPalindrome(test3));
console.log(isPalindrome(test4));
console.log(isPalindrome(test5));

