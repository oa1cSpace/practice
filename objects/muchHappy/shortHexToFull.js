/**
 * Функция для конвертации короткой записи hex цвета в полную (#05а => #0055aa)
 * */

function get_rand_color()
{
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

console.log (get_rand_color());