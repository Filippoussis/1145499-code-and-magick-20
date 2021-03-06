'use strict';
(function () {

  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var MIN_INDENT = 10;
  var MAX_HEIGHT_COLUMN = 150;
  var WIDTH_COLUMN = 40;
  var GAP_COLUMN = 50;
  var PADDING_LEFT = 55;
  var MYSELF_BGCOLOR = 'rgba(255, 0, 0, 1)';
  var CLOUD_SHADOW_BGCOLOR = 'rgba(0, 0, 0, 0.7)';
  var FONT_FAMILY = '16px PT Mono';
  var MIN_SATURATION = 0;
  var MAX_SATURATION = 100;

  window.getCloud = function (ctx) {
    var gradient = ctx.createLinearGradient(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(1, 'pink');

    ctx.fillStyle = CLOUD_SHADOW_BGCOLOR;
    ctx.fillRect(CLOUD_X + MIN_INDENT, CLOUD_Y + MIN_INDENT, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = gradient;
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.font = FONT_FAMILY;
    ctx.fillStyle = 'red';
    ctx.fillText('Ура вы победили!', CLOUD_X + PADDING_LEFT, CLOUD_Y + 3 * MIN_INDENT);
    ctx.fillStyle = 'black';
    ctx.fillText('Список результатов:', CLOUD_X + PADDING_LEFT, CLOUD_Y + 5 * MIN_INDENT);
  };

  window.renderStatistics = function (ctx, players, times) {

    window.getCloud(ctx);

    var maxTime = times[0];
    for (var i = 1; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }

    for (var j = 0; j < players.length; j++) {
      ctx.fillStyle = 'black';
      ctx.fillText(Math.round(times[j]), CLOUD_X + PADDING_LEFT + j * GAP_COLUMN + j * WIDTH_COLUMN, CLOUD_HEIGHT - 4 * MIN_INDENT - times[j] / maxTime * MAX_HEIGHT_COLUMN);
      ctx.fillText(players[j], CLOUD_X + PADDING_LEFT + j * GAP_COLUMN + j * WIDTH_COLUMN, CLOUD_HEIGHT - MIN_INDENT);

      ctx.fillStyle = (players[j] === 'Вы') ? MYSELF_BGCOLOR : 'hsl(240, ' + Math.floor(MIN_SATURATION + Math.random() * (MAX_SATURATION + 1 - MIN_SATURATION)) + '%, 50%)';

      ctx.fillRect(CLOUD_X + PADDING_LEFT + j * GAP_COLUMN + j * WIDTH_COLUMN, CLOUD_HEIGHT - 3 * MIN_INDENT, WIDTH_COLUMN, -(times[j] / maxTime * MAX_HEIGHT_COLUMN));
    }
  };

})();
