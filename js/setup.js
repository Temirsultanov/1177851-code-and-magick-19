'use strict';
var COUNT_WIZARDS = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var persons = [];
var takeRandom = function (max) {
  return Math.floor(Math.random() * max);
};
document.querySelector('.setup').classList.remove('hidden');
var renderObj = function () {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    persons[i] = {};
    persons[i]['name'] = names[takeRandom(names.length)] + ' ' + surnames[takeRandom(surnames.length)];
    persons[i]['coatColor'] = coatColors[takeRandom(coatColors.length)];
    persons[i]['eyesColor'] = eyesColors[takeRandom(eyesColors.length)];
  }
};
renderObj();
var appendBlocks = function (array) {
  var fragment = document.createDocumentFragment();
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  for (var i = 0; i < array.length; i++) {
    var wizardElem = template.cloneNode(true);
    wizardElem.querySelector('.setup-similar-label').textContent = array[i].name;
    wizardElem.querySelector('.wizard-coat').style.fill = array[i].coatColor;
    wizardElem.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;
    fragment.appendChild(wizardElem);
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
};
appendBlocks(persons);
document.querySelector('.setup-similar').classList.remove('hidden');
