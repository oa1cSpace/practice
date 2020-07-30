/*
function createDiv(divName) {
    divName = document.createElement('div');
    return divName;
}
*/


function createElement2(name, classes) {
    Element = document.createElement(name);
    Element.classList.add(classes);
    return Element;
}


function createElement3(name, classes, innerHTML) {
    Element = document.createElement(name);
    Element.classList.add(classes);
    Element.innerHTML = innerHTML;
    return Element;
}


/*---===  NEWS  ===---*/
const newsCont = createElement3('div', 'containerTitle', 'Новости');
document.body.append(newsCont);


/* ===  PARENT CONTAINER === */
const centerContainer = createElement2('div', 'container');
document.body.append(centerContainer);


/*---===  CARDS CONTAINER  ===---*/

const cardsContainer = createElement2('div', 'mainContainer');
centerContainer.append(cardsContainer);



/*
let cont;
let cardsContainer = createDiv(cont);

//console.log(cardsContainer);

cardsContainer.className = 'mainContainer';
cont = document.getElementById('mainContainer');
document.body.insertBefore(cardsContainer, cont);
*/


/*---===  LEFT BLOCK  ===---*/
const leftContainer = createElement2('div', 'mainContainer-leftBlock');
cardsContainer.append(leftContainer);

/*
let contLeft;
let leftContainer = createDiv(contLeft);

//console.log(leftContainer);

leftContainer.className = 'mainContainer-leftBlock';
contLeft = document.getElementById('mainContainer-leftBlock');
document.body.prepend(cardsContainer, contLeft);
*/


/*---===  LEFT BLOCK, TOP PART  ===--->*/
const leftTopCont = createElement2('div', 'mainContainer-leftBlock-topPart');
leftContainer.append(leftTopCont);

/*
let contLeftTop;
let leftTopCont = createDiv(contLeftTop);

//console.log(leftTopCont);

leftTopCont.className = 'mainContainer-leftBlock-topPart';
contLeftTop = document.getElementById('mainContainer-leftBlock-topPart');
document.body.prepend(leftContainer, contLeftTop);
*/


/*<!--LEFT BLOCK, TOP PART, NEWS 1-->*/
const topCardCont = createElement2('div', 'news-card-top-bigPart backgroundColorOfCard mainContainer-leftBlock-topPart-marginBottom footerDownForRow');
leftTopCont.append(topCardCont);
/*
let topCard;
let topCardCont = createDiv(topCard);

//console.log(topCardCont);

topCardCont.className = 'news-card-top-bigPart backgroundColorOfCard mainContainer-leftBlock-topPart-marginBottom footerDownForRow';
topCard = document.getElementById('news-card-top-bigPart backgroundColorOfCard mainContainer-leftBlock-topPart-marginBottom footerDownForRow');
document.body.prepend(topCardCont, topCard);
*/





























