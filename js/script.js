window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          calc = require('./modules/calc'),
          cards = require('./modules/cards'),
          timer = require('./modules/timer'),
          slider = require('./modules/slider'),
          forms = require('./modules/forms');
    tabs();
    modal();
    calc();
    cards();
    timer();
    slider();
    forms();
});