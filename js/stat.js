'use strict'
var CLOUD_WIDTH = 520;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CLOUD_BACKGROUND_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var FONT = '16px PT Mono';
var BASELINE = 'hanging';
var FIRST_LINE_TEXT = 'Ура вы победили!';
var SECOND_LINE_TEXT = 'Список результатов:';
var TEXT_LINE_X = 140;
var TEXT_LINE_Y = 40;
var TEXT_LINE2_Y = TEXT_LINE_Y + GAP * 2;
var WIDTH_GRAPH = 40;
var MAX_GRAPH_HEIGHT = 150;
var TEXT_SPACE = 100;
var GRAPH_GAP = 50;
var PLAYER_COLOR_GRAPH = 'rgba(255, 0, 0, 1)';


window.prevSteps = function(){}
window.renderStatistics = function(ctx, names, times){

  // Функция которая возращает лучший результат игры
  var getBestResult = function () {
    return Math.max.apply(null, times);
  };
  var maxResult = getBestResult(times);

  // Поучаем цвет гистограмы других игроков или своей.
  var getPlayerGraphColor = function (name) {
    return (name === 'Вы') ? PLAYER_COLOR_GRAPH : 'hsla(235, 100%, ' + Math.random() * 100 + '% , 1)';
  };

  // Функция рисует гистограмы игроков их имена и результаты
  var drawPlayerBars = function () {
    var nextCoordinateX = 155;

    for (var i = 0; i < times.length; i++) {
      var playerHeightBar = Math.round((times[i] / maxResult) * MAX_GRAPH_HEIGHT);
      var nextCoordinateY = TEXT_SPACE + MAX_GRAPH_HEIGHT - playerHeightBar;

      drawBlock(nextCoordinateX, nextCoordinateY, WIDTH_GRAPH, playerHeightBar, getPlayerGraphColor(names[i])); // нарисовал гистограммы
      drawText(FONT, BASELINE, Math.round(times[i]), nextCoordinateX, (nextCoordinateY - GAP * 2)); // написал время
      drawText(FONT, BASELINE, names[i], nextCoordinateX, (CLOUD_HEIGHT - GAP)); // написал имена

      nextCoordinateX += GRAPH_GAP + WIDTH_GRAPH;
    }
  };

  // Функция рисует облако
  var drawBlock = function (x, y, width, height, fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
  };

  // Функция рисует текст
  var drawText = function (font, baseline, text, x, y) {
    ctx.font = font;
    ctx.textBaseline = baseline;
    ctx.strokeText(text, x, y);
  };

  drawBlock(CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR); // нарисовали тень в облаке
  drawBlock(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_BACKGROUND_COLOR); // нарисовали облако
  drawText(FONT, BASELINE, FIRST_LINE_TEXT, TEXT_LINE_X, TEXT_LINE_Y); // написали 1 строку текста
  drawText(FONT, BASELINE, SECOND_LINE_TEXT, TEXT_LINE_X, TEXT_LINE2_Y); // написали 2 строку текста
  drawPlayerBars(); // нарисовали гистограммы с результатами

}

