import { createElement, createHeader, } from '../../script/layout'

const page = document.querySelector('.page');

const header = createHeader();
page.append(header);

const title = createElement('h1', 'title', 'Коммьюніті');
page.append(title);

const content = createElement('main', 'content');

const headerButtons = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/avatar.png',
  },
];

const tabs = createElement('div', 'tabs');
const tabNames = ['База знань', 'Інформація'];

tabNames.forEach((name, index) => {
  const buttonClass = index === 0 ? 'tab__active' : 'tab';
  const button = createElement('button', buttonClass, name);
  tabs.append(button);
});

content.append(tabs);

const image = createElement('img');
image.width = 346;
image.height = 160;
image.src = '/img/telegram.png';
content.append(image);

const subTitle = createElement('h2', 'title', 'Що таке база знань?');
const text = createElement(
  'p',
  'text',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.'
);

const orangeButton = createElement('button', 'orange__button', "Перейти до ком'юніті у Телеграм");
content.append(subTitle, text, orangeButton);

page.append(content);