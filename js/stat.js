'use strict'
var CLOUD_WIDTH = 520;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP_X = 50;
var FONT_GAP_Y = 10;
var MAX_HEIGHT_HISTOGRAM = 150;
var WIDTH_HISTOGRAM = 40;
var DISTANCE_BETWEEN_HISTOGRAM = 50;
var PLAYER_COLOR_HISTOGRAM = 'rgba(255, 0, 0, 1)';

window.prevSteps = function(){}
window.renderStatistics = function(ctx, names, times){

  //var  times = times;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 150, 40);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Список результатов:', 150, 70);

  drawHistogram(names);

  function getHistogram(times){
    var heightColumns = [];
    var proportion;
    var maxTime = +times[0];
    if(isNaN(+times[0]) === false){
      for(var i = 1; i < times.length; i++) {
        if(maxTime < +times[i]) {
          maxTime = +times[i];
        }
      }
      maxTime = Math.floor(maxTime);
    } else {
      maxTime = 0;
    }

    proportion = maxTime / MAX_HEIGHT_HISTOGRAM;

    for(var i = 0; i < times.length; i++) {
      heightColumns.push(Math.floor(+times[i] / proportion));
    }

    return heightColumns;

  }

  function drawHistogram(names){
    var heightColumns = getHistogram(times);
    var cloudContentBottom = CLOUD_HEIGHT + CLOUD_Y - FONT_GAP_Y;
    var flag = true;

    for(var i = 0, k = 1; i < names.length; i++, k++){

      if(names[i] === 'Вы'){

        // histograms
        ctx.fillStyle = PLAYER_COLOR_HISTOGRAM;
        ctx.fillRect((CLOUD_X + FONT_GAP_X), cloudContentBottom - heightColumns[i] - 30, WIDTH_HISTOGRAM, heightColumns[i]);

        // name players
        ctx.font = '16px PT Mono';
        ctx.fillStyle = '#000';
        ctx.fillText(names[i], (CLOUD_X + FONT_GAP_X), cloudContentBottom - 10);

        // time players
        ctx.font = '16px PT Mono';
        ctx.fillStyle = '#000';
        ctx.fillText(Math.floor(times[i]), (CLOUD_X + FONT_GAP_X), cloudContentBottom - heightColumns[i] - 35);

        k--;
      } else {
        // histograms
        var randomCount = Math.random().toFixed(2);
        ctx.fillStyle = 'rgba(0, 0, 255,' + randomCount + ')';

        ctx.fillRect((CLOUD_X + FONT_GAP_X) + (WIDTH_HISTOGRAM + DISTANCE_BETWEEN_HISTOGRAM) * k, cloudContentBottom - heightColumns[i] - 30, WIDTH_HISTOGRAM, heightColumns[i]);

        // name players
        ctx.font = '16px PT Mono';
        ctx.fillStyle = '#000';
        ctx.fillText(names[i], (CLOUD_X + FONT_GAP_X) + (WIDTH_HISTOGRAM + DISTANCE_BETWEEN_HISTOGRAM) * k, cloudContentBottom - 10);

        // time players
        ctx.font = '16px PT Mono';
        ctx.fillStyle = '#000';
        ctx.fillText(Math.floor(times[i]), (CLOUD_X + FONT_GAP_X) + (WIDTH_HISTOGRAM + DISTANCE_BETWEEN_HISTOGRAM) * k, cloudContentBottom - heightColumns[i] - 35);
      }

    }

  }

  function randomCount(){

  }

}

