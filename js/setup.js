'use strict';
var COUNT_WIZARDS = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var persons = [];

var openSetupButton = document.querySelector('.setup-open');
var closeSetupButton = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');
var setupInput = setup.querySelector('.setup-user-name');
var takeRandom = function (max) {
  return Math.floor(Math.random() * max);
};
var renderObj = function () {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    persons[i] = {};
    persons[i]['name'] = names[takeRandom(names.length)] + ' ' + surnames[takeRandom(surnames.length)];
    persons[i]['coatColor'] = coatColors[takeRandom(coatColors.length)];
    persons[i]['eyesColor'] = eyesColors[takeRandom(eyesColors.length)];
  }
};
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
var onOpenSetupButtonClick = function () {
  setup.classList.remove('hidden');
};
var onCloseSetupButtonClick = function () {
  setup.classList.add('hidden');
};
var onOpenSetupButtonEnter = function (evt) {
  if (evt.key === 'Enter') {
    onOpenSetupButtonClick();
    openSetupButton.removeEventListener('click', onOpenSetupButtonClick);
    document.querySelector('.setup-open-icon').removeEventListener('keydown', onOpenSetupButtonEnter);
  }
};
var onCloseSetupButtonEnter = function (evt) {
  if (evt.key === 'Enter') {
    onCloseSetupButtonClick();
    openSetupButton.addEventListener('click', onOpenSetupButtonClick);
    document.querySelector('.setup-open-icon').addEventListener('keydown', onOpenSetupButtonEnter);
  }
};
var closeSetupEsc = function () {
  onCloseSetupButtonClick();
  openSetupButton.addEventListener('click', onOpenSetupButtonClick);
  document.querySelector('.setup-open-icon').addEventListener('keydown', onOpenSetupButtonEnter);
};
var escapeClick = function (evt) {
  if (evt.key === 'Escape') {
    closeSetupEsc();
  }
};
renderObj();
appendBlocks(persons);
openSetupButton.addEventListener('click', onOpenSetupButtonClick);
closeSetupButton.addEventListener('click', onCloseSetupButtonClick);
document.querySelector('.setup-open-icon').addEventListener('keydown', onOpenSetupButtonEnter);
document.querySelector('.setup-close').addEventListener('keydown', onCloseSetupButtonEnter);
document.addEventListener('keydown', escapeClick);


var setupInputFocus = function () {
  document.removeEventListener('keydown', escapeClick);
};


setupInput.addEventListener('focus', setupInputFocus);
var unFocusInput = function () {
  document.addEventListener('keydown', escapeClick);
};
setupInput.addEventListener('blur', unFocusInput);


var saveButton = document.querySelector('.setup-submit');
var onSaveButtonClick = function (evt) {
  evt.preventDefault();
};
saveButton.addEventListener('submit', onSaveButtonClick);


var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');
var counterEyes = 1;
var counterCoat = 1;
var counterFireball = 1;
var onWizardCoatClick = function () {
  wizardCoat.style.fill = coatColors[counterCoat];
  counterCoat++;
  if (counterCoat === coatColors.length) {
    counterCoat = 0;
  }
  // document.querySelector('.input-coat-color').value = wizardCoat.style.fill;
};
var onWizardEyesClick = function () {
  wizardEyes.style.fill = eyesColors[counterEyes];
  counterEyes++;
  if (counterEyes === eyesColors.length) {
    counterEyes = 0;
  }
  document.querySelector('.input-eyes-color').value = wizardEyes.style.fill;
};
var onFireballClick = function () {
  fireball.style.backgroundColor = fireballColors[counterFireball];
  document.querySelector('.input-fireball-color').value = fireballColors[counterFireball];
  counterFireball++;
  if (counterFireball === fireballColors.length) {
    counterFireball = 0;
  }
};
wizardCoat.addEventListener('click', onWizardCoatClick);
wizardEyes.addEventListener('click', onWizardEyesClick);
fireball.addEventListener('click', onFireballClick);

