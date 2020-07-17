/**
 * Генерация случайного hex цвета
 * */

function randomColorInHex() {
  return  [...new Set('#'+(0x1000000+(Math.random()) * 0xffffff)
      .toString(16)
      .substr(1,6))];
}

console.log (randomColorInHex().join(''));