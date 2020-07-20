/**
 * Генерация случайного hex цвета
 * */

function randomColorInHex() {
  let random = (Math.random() * 0xFFFFFF << 0).toString(16).substr(0,6);

   return random.length == 6 ? '#'+random : '#'+random+0x1;
}

for (let i=0; i<15000; i++){
  console.log (randomColorInHex());
}
