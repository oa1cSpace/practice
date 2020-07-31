function createElement(name, classes, innerHTML) {

    let arrClases = classes.split(",").join("");
    let Element = document.createElement(name);
    Element.className = arrClases;

    if (innerHTML) {
        Element.innerHTML = innerHTML;
    }

    return Element;
};


/*const collectionData = [
    {},
];*/


/*---===  NEWS  ===---*/
const newsDiv = createElement('div', 'containerTitle', 'Новости');
//const newsDiv = createElement('div', 'containerTitle');
document.body.append(newsDiv);

/*---===  CONTAINER  ===---*/
const contDiv = createElement('div', 'container');
document.body.append(contDiv);

/*---===  MAIN_CONTAINER   ===---*/
const mainContDiv = createElement('div', 'mainContainer-leftBlock');
contDiv.append(mainContDiv);

/*---===  LEFT_BLOCK, TOP_PART   ===---*/
const leftBlockTopDiv = createElement('div', 'mainContainer-leftBlock-topPart');
mainContDiv.append(leftBlockTopDiv);

/*---===  LEFT_BLOCK, TOP_PART, NEWS_1   ===---*/
const topPrtNewsDiv = createElement('div', 'news-card-top-bigPart backgroundColorOfCard mainContainer-leftBlock-topPart-marginBottom footerDownForRow');
leftBlockTopDiv.append(topPrtNewsDiv);

/*---===  NEWS_TEXT   ===---*/
const newsTextDiv = createElement('div', 'news-text');
topPrtNewsDiv.append(newsTextDiv);

/*---===  NEWS_TOPIC   ===---*/
const newsTopic = createElement('div', 'news-topic', '<h2>Xiaomi выпустит недорогой смартфон Poco C3 с процессором Helio G35</h2>');
newsTextDiv.append(newsTopic);

/*---===  NEWS_BODY   ===---*/
const newsBodyDiv = createElement('div', 'news-body', '<p>Бренд Poco, представленный китайской компанией Xiaomi в августе 2018 года, вскоре анонсирует очередной смартфон, о чём сообщают интернет - источники.Новинка будет относиться к бюджетному ценовому сегменту. </p>');
newsTextDiv.append(newsBodyDiv);

/*---===  NEWS_FOOTER   ===---*/
const newsFooter = createElement('div', 'news-footer');
newsTextDiv.append(newsFooter);

/*---===  NEWS_DATE   ===---*/
const newsDate = createElement('div', 'news-date', '22.07.2020 15:48');
newsFooter.append(newsDate);

/*---===  NEWS_COMMENTS   ===---*/
const newsComments = createElement('div', 'news-comment', '10 коментариев');
newsFooter.append(newsComments);

/*---===  NEWS_PICTURE   ===---*/
const newsPic1 = createElement('img', 'news-picture');
newsPic1.src = 'pics/MOBILES.jpg';
topPrtNewsDiv.append(newsPic1);

/*---===  LEFT_BLOCK, BOTTOM_PART   ===---*/
const bottomPartDiv = createElement('div', 'mainContainer-leftBlock-bottomPart');
mainContDiv.append(bottomPartDiv);

/*---===  LEFT_BLOCK, BOTTOM_PART, BIG_LEFT_PART   ===---*/
const bigLeftDiv = createElement('div', 'mainContainer-leftBlock-bottomPart-bigLeftPart mainContainer-leftBlock-bottomPart-bigLeftPart-marginRight');
bottomPartDiv.append(bigLeftDiv);