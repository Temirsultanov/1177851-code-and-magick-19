'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var WIDTH_GISTOGRAM = 40;
var GAP = 10;
var CLOUD_X = 140;
var CLOUD_Y = 10;
var MAX_HEIGHT = 150;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, CLOUD_HEIGHT / 2 + y);
  ctx.lineTo(50 + x, y);
  ctx.lineTo(CLOUD_WIDTH - 50 + x, y);
  ctx.lineTo(CLOUD_WIDTH + x, CLOUD_HEIGHT / 2 + y);
  ctx.lineTo(CLOUD_WIDTH - 50 + x, CLOUD_HEIGHT + y);
  ctx.lineTo(50 + x, CLOUD_HEIGHT + y);
  ctx.closePath();
  ctx.fill();
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 150 + 100, 20 + 10);
  ctx.fillText('Список результатов:', 150 + 100, 20 + 35);
  // gistagramDraw(ctx, names, times);
  var maxElem = times[0];
  for (var i = 1; i < names.length; i++) {
    if (times[i] > maxElem) {
      maxElem = times[i];
    }
  }
  for (var j = 0; j < names.length; j++) {
    var currentElemHeight = MAX_HEIGHT * times[j] / maxElem;
    var currentSaturate = Math.floor(Math.random() * 100);
    var currentColor = 'hsl(240, ' + currentSaturate + '%, 50%)';
    ctx.fillStyle = currentColor;
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + 60 + (WIDTH_GISTOGRAM + 50) * j, CLOUD_HEIGHT - currentElemHeight - 20, WIDTH_GISTOGRAM, currentElemHeight);
    ctx.fillStyle = 'black';
    ctx.font = '15px PT Mono';
    ctx.fillText(names[j], 200 + (WIDTH_GISTOGRAM + 50) * j, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[j]), CLOUD_X + 60 + (WIDTH_GISTOGRAM + 50) * j, CLOUD_HEIGHT - currentElemHeight - 30);
  }
};
