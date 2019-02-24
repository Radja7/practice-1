'use strict';

//window.prevSteps = function(){}
window.renderStatistics = function(ctx, names, times){

  var maxResult = window.utilities.getBestResult(times);

  // Функция рисует гистограмы игроков их имена и результаты
  var drawPlayerBars = function () {
    var nextCoordinateX = window.constants.STEP_COORDINTE_X;

    for (var i = 0; i < times.length; i++) {
      var playerHeightBar = Math.round((times[i] / maxResult) * window.constants.MAX_GRAPH_HEIGHT);
      var nextCoordinateY = window.constants.TEXT_SPACE + window.constants.MAX_GRAPH_HEIGHT - playerHeightBar;

      window.utilities.drawBlock(ctx, nextCoordinateX, nextCoordinateY, window.constants.WIDTH_GRAPH, playerHeightBar, window.utilities.getPlayerGraphColor(names[i])); // нарисовал гистограммы
      window.utilities.drawText(ctx, window.constants.FONT, window.constants.BASELINE, Math.round(times[i]), nextCoordinateX, (nextCoordinateY - window.constants.GAP * 2)); // написал время
      window.utilities.drawText(ctx, window.constants.FONT, window.constants.BASELINE, names[i], nextCoordinateX, (window.constants.CLOUD_HEIGHT - window.constants.GAP)); // написал имена

      nextCoordinateX += window.constants.GRAPH_GAP + window.constants.WIDTH_GRAPH;
    }
  };

  window.utilities.drawBlock(ctx, window.constants.CLOUD_X + window.constants.GAP, window.constants.CLOUD_Y + window.constants.GAP, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT, window.constants.SHADOW_COLOR); // нарисовали тень в облаке
  window.utilities.drawBlock(ctx, window.constants.CLOUD_X, window.constants.CLOUD_Y, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT, window.constants.CLOUD_BACKGROUND_COLOR); // нарисовали облако
  window.utilities.drawText(ctx, window.constants.FONT, window.constants.BASELINE, window.constants.FIRST_LINE_TEXT, window.constants.TEXT_LINE_X, window.constants.TEXT_LINE_Y); // написали 1 строку текста
  window.utilities.drawText(ctx, window.constants.FONT, window.constants.BASELINE, window.constants.SECOND_LINE_TEXT, window.constants.TEXT_LINE_X, window.constants.TEXT_LINE2_Y); // написали 2 строку текста
  drawPlayerBars(); // нарисовали гистограммы с результатами

};

