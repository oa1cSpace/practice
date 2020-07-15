// 16. Напишите функцию, которая найдет високосные года в указанном диапазоне дат


function findYear (start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        if (i % 4 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(findYear(2000,2018)); // [2000,2004,2008,2012,2016]