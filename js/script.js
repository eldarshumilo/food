import tabs from  './modules/tabs';
import modal, { openModalWin }  from  './modules/modal';
import calc  from  './modules/calc';
import cards  from  './modules/cards';
import timer  from  './modules/timer';
import slider  from  './modules/slider';
import forms  from  './modules/forms';

window.addEventListener('DOMContentLoaded', () => { 

    const modalTimerId = setTimeout(() => openModalWin('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    calc();
    cards();
    timer('.timer', '2021-05-25');
    slider({
        container: '.offer__slider',
        slid: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#current'
    });
    forms('form', modalTimerId);
});