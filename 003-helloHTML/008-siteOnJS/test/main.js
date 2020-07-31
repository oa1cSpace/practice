"use strict"

function createElement(name, classes, innerHTML) {
  const Element = document.createElement(name);
  Element.className = classes.split(",").join(""); 
  
  if (innerHTML) {
    Element.innerHTML = innerHTML;
  }

  return Element;
};


function createNewsCard(title, date, text, commentCount, numberBlock){
  const contCol8 = createElement("div", "container, news_active, column-block-8" + numberBlock);
  grid.append(contCol8);




  // // кол-блок-8 текст 
  const col8Text = createElement("div", "main-text"); 
  contCol8.append(col8Text);
  
  // // // кол-блок-8 текст внутри 
  const textcol8H1 = createElement("div", "h1",title);
  const textcol8P = createElement("div", "p", text);
  col8Text.append(textcol8H1);
  col8Text.append(textcol8P);
  
  // // // // //футер
  const footercol8 = createElement("div", "footer"); 
  col8Text.append(footercol8); 
  
  const dataFCol8 = createElement("div", "data", date); 
  footercol8.append(dataFCol8); 
  const commentFCol8 = createElement("div","comments", commentCount+" комментариев"); 
  footercol8.append(commentFCol8); 

return contCol8;
}






// grid.append(createNewsCard("Ghost of Tsushima", 
// "22.07.2020 15:57", 
// "Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed."
// 10,
// 8
// )); 

  //ТЕКСТ НОВОСТЕЙ
const newDiv = createElement('div', 'text_h1','Новости');
document.body.append(newDiv);

// Контейнер-центр
const containerCentral = createElement('div', 'container-center');
document.body.append(containerCentral);

// Грид
const grid = createElement('div', 'grid');
containerCentral.append(grid);

// Топ-блок + класс актив
const topBlock = createElement("div", "top-block news_active");
grid.append(topBlock);

//Создаю main-text 
const mainText = createElement('div', 'main-text');
topBlock.append(mainText);

// Заголовок h1 и p 
let textH1 = createElement("div", "h1", "1 KDE Slimbook стал одним из первых ноутбуков на Linux");
let textP = createElement("div", "p", "Компания KDE объявила о выходе ноутбука Slimbook третьего поколения, который является одним из первых ноутбуков под управлением Linux, получившим восьмиядерный процессор AMD Ryzen 7 4800H.");
mainText.append(textH1);
mainText.append(textP);

//футер
let footerTop = createElement("div","footer-top");
mainText.append(footerTop); 

let dataF = createElement("div", "data", "22.07.2020 15:57");
footerTop.append(dataF); 
let commentF = createElement("div","comments","10 комментариев");
footerTop.append(commentF); 

// Картинка в топ-блок
let imageTop = createElement("img", "main-image");
imageTop.src = "https://3dnews.ru/assets/external/illustrations/2020/07/22/1016333/sm.960x0.750.jpg";
topBlock.append(imageTop);

// Контейнер-блок + коломн-блок-1 + класс актив
let rightBlock = createElement("div", "container, news_active, column-block-1");
grid.append(rightBlock);

// правая картинка 
let imageRight = createElement("img", "main-image");
imageRight.src = "https://3dnews.ru/assets/external/illustrations/2020/07/02/1014741/SK_hynix_HBM2E.jpg";
rightBlock.append(imageRight);

// правый блок 
let rightText = createElement("div", "main-text");
rightBlock.append(rightText);

// Заголовок h1 и p 
let textRH1 = createElement("div", "h1 top-pudding", "Xbox");
let textRP = createElement("div", "p","Не за горами появление на полках магазинов нового поколения Xbox. В честь этого события мы решили вспомнить путь Microsoft на консольном рынке.");
rightText.append(textRH1);
rightText.append(textRP);

//футер
let footerRight = createElement("div", "footer, bot-pudding");
rightBlock.append(footerRight); 

let dataFR = createElement("div", "data", "22.07.2020 15:57");
footerRight.append(dataFR); 
let commentFR = createElement("div", "comments", "10 комментариев");
footerRight.append(commentFR); 

// bottom-big 
let botBig = createElement("div", "bottom-big, news_active");
grid.append(botBig);

// большой блок картинка 
let imageBig = createElement("img", "main-image");
imageBig.src = "https://3dnews.ru/assets/external/illustrations/2020/07/20/1016159/704.jpg";
botBig.append(imageBig);

// большой блок текст 
let bigText = createElement("div", "main-text");
botBig.append(bigText);

// большой блок внутри текста все 
let textBigH1 = createElement("div", "h1", "Huawei сотрудничает с правительством");
let textBigP = createElement("div", "p", "Китай рассматривает возможность введения санкций против европейских производителей телекоммуникационного оборудования Nokia и Ericsson, если члены ЕС последуют примеру США и Великобритании и запретят компании Huawei участвовать в развёртывании сетей связи пятого поколения (5G) в регионе. Об этом сообщает издание Wall Street Journal со ссылкой на собственные осведомлённые источники.");
bigText.append(textBigH1);
bigText.append(textBigP);

// //футер
let footerBig = createElement("div", "footer-big");
botBig.append(footerBig); 

let dataFB = createElement("div", "data", "22.07.2020 15:57");
footerBig.append(dataFB); 
const commentFB = createElement("div", "comments", "10 комментариев");
footerBig.append(commentFB); 

// container column-block-4 news_active 
let contCol4 = createElement("div", "container, news_active, column-block-4");
grid.append(contCol4);

// кол-блок-4 картинка 
let imageCol4 = createElement("img", "main-image");
imageCol4.src = "https://3dnews.ru/assets/external/galleries/2020/07/13/5f0c1ee0b4182e486198aa06/9144ffbfbbf7ce8d9c365dcb6e7458fb.png";
contCol4.append(imageCol4);

// кол-блок-4 текст 
let col4Text = createElement("div","main-text");
contCol4.append(col4Text);

// кол-блок-4 текст внутри 
let textcol4H1 = createElement("div", "h1", "Ghost of Tsushima");
let textcol4P = createElement("div","p","Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed.");
col4Text.append(textcol4H1);
col4Text.append(textcol4P);

// // //футер
let footercol4 = createElement("div", "footer");
col4Text.append(footercol4); 

let dataFCol4 = createElement("div", "data", "22.07.2020 15:57");
footercol4.append(dataFCol4); 
let commentFCol4 = createElement("div", "comments", "10 комментариев");
footercol4.append(commentFCol4); 

// container column-block-5 news_active 
let contCol5 = createElement("div", "container, news_active, column-block-5");
grid.append(contCol5);

// // кол-блок-5 текст 
const col5Text = createElement("div", "main-text");
contCol5.append(col5Text);

// // кол-блок-5 текст внутри 
const textcol5H1 = createElement("div","h1" ,"Ghost of Tsushima");
let textcol5P = createElement("div","p", "Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed.");
col5Text.append(textcol5H1);
col5Text.append(textcol5P);

// // // //футер
const footercol5 = createElement("div","footer" );
col5Text.append(footercol5); 
 
let dataFCol5 = createElement("div", "data", "22.07.2020 15:57");
footercol5.append(dataFCol5); 
const commentFCol5 = createElement("div", "comments", "10 комментариев");
footercol5.append(commentFCol5); 

// container column-block-6 news_active 
let contCol6 = createElement("div", "container, news_active, column-block-6");
grid.append(contCol6);

// // кол-блок-6 текст 
const col6Text = createElement("div", "main-text");
contCol6.append(col6Text);

// // // кол-блок-6 текст внутри 
const textcol6H1 = createElement("div", "h1", "Ghost of Tsushima");
const textcol6P = createElement("div", "p", "Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed.");
col6Text.append(textcol6H1);
col6Text.append(textcol6P);

// // // // //футер
const footercol6 = createElement("div", "footer");
col6Text.append(footercol6); 

const dataFCol6 = createElement("div", "data", "22.07.2020 15:57");
footercol6.append(dataFCol6); 
const commentFCol6 = createElement("div", "comments", "10 комментариев");
footercol6.append(commentFCol6); 

// container column-block-7 news_active 
const contCol7 = createElement("div", "container, news_active, column-block-7");
grid.append(contCol7);

// // кол-блок-7 текст 
const col7Text = createElement("div", "main-text");
contCol7.append(col7Text);

// // // кол-блок-7 текст внутри 
const textcol7H1 = createElement("div", "h1","Ghost of Tsushima");
const textcol7P = createElement("div","p", "Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed.");
col7Text.append(textcol7H1);
col7Text.append(textcol7P);

// // // // //футер
const footercol7 = createElement("div", "footer");
col7Text.append(footercol7); 

const dataFCol7 = createElement("div", "data", "22.07.2020 15:57"); 
footercol7.append(dataFCol7); 
let commentFCol7 =  createElement("div", "comments", "10 комментариев");
footercol7.append(commentFCol7); 

// container column-block-8 news_active
createNewsCard(grid, "Ghost of Tsushima");
// let contCol8 = createElement("div", "container, news_active, column-block-8");
// grid.append(contCol8);

// // // кол-блок-8 текст 
// let col8Text = createElement("div", "main-text");
// contCol8.append(col8Text);

// // // // кол-блок-8 текст внутри 
// let textcol8H1 = createElement("div", "h1","Ghost of Tsushima");
// let textcol8P = createElement("div", "p", "Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed.");
// col8Text.append(textcol8H1);
// col8Text.append(textcol8P);

// // // // //футер
// let footercol8 = createElement("div", "footer");
// col8Text.append(footercol8);

// let dataFCol8 = createElement("div", "data", "22.07.2020 15:57");
// footercol8.append(dataFCol8);
// let commentFCol8 = createElement("div","comments", "10 комментариев");
// footercol8.append(commentFCol8);

// // container column-block-9 news_active 
// let contCol9 = createElement("div", "container, news_active, column-block-9");
// grid.append(contCol9);
// let col9Text = createElement("div", "main-text");
// contCol9.append(col9Text);

// // // кол-блок-9 текст внутри 
let textcol9H1 = createElement("div", "h1", "Ghost of Tsushima");
let textcol9P = createElement("div", "p", "Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed."); 
col9Text.append(textcol9H1);
col9Text.append(textcol9P);

// // // // //футер
let footercol9 = createElement("div", "footer");
col9Text.append(footercol9); 


const dataFCol9 = createElement("div", "data" ,"22.07.2020 15:57");
footercol9.append(dataFCol9); 
const commentFCol9 = createElement("div", "comments", "10 комментариев");
footercol9.append(commentFCol9); 