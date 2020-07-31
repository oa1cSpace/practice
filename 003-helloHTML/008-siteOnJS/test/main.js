"use strict"

function createElement(name, classes, innerHTML) {

    const Element = document.createElement(name);
    Element.className = classes;

    Element.className = Array.isArray(classes) ? classes.filter(Boolean).join(' ') : classes;

    if (innerHTML) {
        Element.innerHTML = innerHTML;
    }

    return Element;
};


function createNewsCard(title, date, text, commentCount, img, classesNew = {}) {


    const contCol = createElement("div", ["container news_active", classesNew.container]);
    grid.append(contCol);

    if (img) {
        const imageCol = createElement("img", ["main-image", classesNew.topPic]);
        imageCol.src = img;
        contCol.append(imageCol);
    }
    ;

    // // кол-блок-8 текст
    const colText = createElement("div", ["main-text"]);
    contCol.append(colText);

    // // // кол-блок-8 текст внутри
    const textcolH1 = createElement("div", ["h1", classesNew.h1], title);
    const textcolP = createElement("div", ["p"], text);
    colText.append(textcolH1);
    colText.append(textcolP);

    // // // // //футер
    const footercol = createElement("div", ["footer", classesNew.footer]);
    colText.append(footercol);

    const dataFCol = createElement("div", ["data"], date);
    footercol.append(dataFCol);
    const commentFCol = createElement("div", ["comments"], commentCount + " комментариев");
    footercol.append(commentFCol);

    return contCol;
};


//ТЕКСТ НОВОСТЕЙ
const newDiv = createElement('div', 'text_h1', 'Новости');
document.body.append(newDiv);

// Контейнер-центр
const containerCentral = createElement('div', 'container-center');
document.body.append(containerCentral);

// Грид
const grid = createElement('div', 'grid');
containerCentral.append(grid);


const collectionBlock = [
    {
        title: "KDE Slimbook стал одним из первых ноутбуков на Linux",
        text: "Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed.",
        date: "22.07.2020 15:57",
        commentCount: 10,
        img: "https://tse2.mm.bing.net/th?id=OIP.pYj8UquyW1ym9bnkjplyQQHaEm&pid=15.1",
        classesNew: {
            container: 'top-block',
            footer: 'footer-top',
            topPic: 'top-pic',
        },
    },
    {
        img: "https://live.staticflickr.com/5471/14203602554_6493bea8c2_n.jpg",
        title: "Xbox",
        text: "Не за горами появление на полках магазинов нового поколения Xbox. В честь этого события мы решили вспомнить путь Microsoft на консольном рынке.",
        date: "22.07.2020 15:57",
        commentCount: 10,
        classesNew: {
            container: 'column-block-1',
            h1: 'top-pudding',
            footer: 'footer1 bot-pudding',
        },
    },
    {
        title: "Huawei сотрудничает с правительством",
        text: "Китай рассматривает возможность введения санкций против европейских производителей телекоммуникационного" +
            "оборудования Nokia и Ericsson, если члены ЕС последуют примеру США и Великобритании и запретят компании Huawei участвовать в развёртывании" +
            "nсетей связи пятого поколения 5G в регионе. Об этом сообщает издание" +
            "Wall Street Journal со ссылкой на собственные осведомлённые источники.",
        date: "22.07.2020 15:57",
        commentCount: 10,
        img: "https://bitcoinexchangeguide.com/wp-content/uploads/2019/11/Huawei-and-the-government-of-China-set-to-collaborate-on-a-blockchain-technology.jpg",
        classesNew: {
            container: 'bottom-big',
            footer: 'footer-big'
        },
    },
    {
        title: "Ghost of Tsushima",
        text: "Уже много лет аудитория просит Ubisoft перенести Assassin’s Creed.",
        date: "22.07.2020 15:57",
        commentCount: 10,
        img: "https://live.staticflickr.com/65535/50158595776_4453acc568_n.jpg",
        classesNew: {
            container: 'column-block-4',
            footer: 'footer1'
        },
    },

    {
        title: "SK Hynix",
        text: "Производители памяти оказались в выгодной ситуации ",
        date: "22.07.2020 15:57",
        commentCount: 10,
        classesNew: {
            container: 'column-block-5',
            footer: 'footer1'
        },
    },
    {
        title: "ASUS",
        text: "Панель может похвастаться высокой частотой обновления — 144 Гц.",
        date: "22.07.2020 15:57",
        commentCount: 10,
        classesNew: {
            container: 'column-block-6',
            footer: 'footer1'
        },
    },
    {
        title: "Ускоритель AMD Radeon",
        text: "MI100 сможет соперничать с NVIDIA A100.",
        date: "22.07.2020 15:57",
        commentCount: 10,
        classesNew: {
            container: 'column-block-7',
            footer: 'footer1'
        },
    },
    {
        title: "Роботы-доставщики Amazon Scout",
        text: "В Атланте  и Франклине  доставкой посылок начали заниматься роботы.",
        date: "22.07.2020 15:57",
        commentCount: 10,
        classesNew: {
            container: 'column-block-8',
            footer: 'footer1'
        },
    },
    {
        title: "NVIDIA GeForce RTX 2080",
        text: "На близость анонса игровых видеокарт NVIDIA поколения Ampere",
        date: "22.07.2020 15:57",
        commentCount: 10,
        classesNew: {
            container: 'column-block-8',
            footer: 'footer1'
        },
    },
];

collectionBlock.map(block => {
    return createNewsCard(block.title, block.date, block.text, block.commentCount, block.img, block.classesNew);
});