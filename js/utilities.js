'use strict';

(function () {
  window.utilities = {

    // возращает лучший результат игры
    getBestResult: function (times) {
      return Math.max.apply(null, times);
    },

    // Поучаем цвет гистограмы других игроков или своей.
    getPlayerGraphColor: function (name) {
      return (name === 'Вы') ? window.utilities.PLAYER_COLOR_GRAPH : 'hsla(235, 100%, ' + Math.random() * 100 + '% , 1)';
    },

    // Функция рисует облако
    drawBlock: function (ctx, x, y, width, height, fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fillRect(x, y, width, height);
    },

    // Функция рисует текст
    drawText: function (ctx, font, baseline, text, x, y) {
      ctx.font = font;
      ctx.textBaseline = baseline;
      ctx.strokeText(text, x, y);
    },

    // Случайный номер элемента массива
    getRandomInteger: function (min, max) {
      return Math.floor(Math.random() * (max - min - 1)) + min;
    },

    // Возвращает случайное значение из массива
    getRandomItemOfArray: function (array) {
      return array[window.utilities.getRandomInteger(0, array.length)];
    },


  };
})();