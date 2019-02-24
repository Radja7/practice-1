'use strict';

(function(){
  window.constants = {

    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,
    CLOUD_WIDTH: 520,
    CLOUD_HEIGHT: 270,
    CLOUD_X: 100,
    CLOUD_Y: 10,
    GAP: 10,
    CLOUD_BACKGROUND_COLOR: '#fff',
    SHADOW_COLOR: 'rgba(0, 0, 0, 0.7)',
    FONT: '16px PT Mono',
    BASELINE: 'hanging',
    FIRST_LINE_TEXT: 'Ура вы победили!',
    SECOND_LINE_TEXT: 'Список результатов:',
    TEXT_LINE_X: 140,
    TEXT_LINE_Y: 40,
    TEXT_LINE2_Y: (function(){
      return window.constants.TEXT_LINE_Y + window.constants.GAP * 2;
    }),
    WIDTH_GRAPH: 40,
    MAX_GRAPH_HEIGHT: 150,
    TEXT_SPACE: 100,
    GRAPH_GAP: 50,
    PLAYER_COLOR_GRAPH: 'rgba(255, 0, 0, 1)',
    STEP_COORDINTE_X: 155,
  };

})();