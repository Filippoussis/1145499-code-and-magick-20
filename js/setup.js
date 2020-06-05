'use strict';
(function () {

  var NUMBER_WIZARDS = 4;

  var FIRST_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон',
  ];

  var LAST_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг',
  ];

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ];

  var MIN_INDEX = 0;
  var MAX_INDEX_FIRST_NAME = FIRST_NAMES.length - 1;
  var MAX_INDEX_LAST_NAME = LAST_NAMES.length - 1;
  var MAX_INDEX_COAT_COLOR = COAT_COLORS.length - 1;
  var MAX_INDEX_EYES_COLOR = EYES_COLORS.length - 1;

  var getRandomBetween = function (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  var getFirstName = function (firstNames, min, max) {
    return firstNames[getRandomBetween(min, max)];
  };

  var getLasttName = function (lastNames, min, max) {
    return lastNames[getRandomBetween(min, max)];
  };

  var getCoatColor = function (coatColors, min, max) {
    return coatColors[getRandomBetween(min, max)];
  };

  var getEyesColor = function (eyesColors, min, max) {
    return eyesColors[getRandomBetween(min, max)];
  };

  var renderWizard = function (firstName, firstNames, lastName, lastNames, coatColor, coatColors, eyesColor, eyesColors, minIndex, maxIndexFirstName, maxIndexLastName, maxIndexCoatColor, maxIndexEyesColor) {
    return {
      firstName: firstName(firstNames, minIndex, maxIndexFirstName),
      lastName: lastName(lastNames, minIndex, maxIndexLastName),
      coatColor: coatColor(coatColors, minIndex, maxIndexCoatColor),
      eyesColor: eyesColor(eyesColors, minIndex, maxIndexEyesColor),
    };
  };

  var renderSimilarWizards = function (numberWizards, firstName, firstNames, lastName, lastNames, coatColor, coatColors, eyesColor, eyesColors, minIndex, maxIndexFirstName, maxIndexLastName, maxIndexCoatColor, maxIndexEyesColor) {
    var wizards = [];
    for (var i = 0; i < numberWizards; i++) {
      wizards.push(renderWizard(firstName, firstNames, lastName, lastNames, coatColor, coatColors, eyesColor, eyesColors, minIndex, maxIndexFirstName, maxIndexLastName, maxIndexCoatColor, maxIndexEyesColor));
    }

    return wizards;
  };

  var wizards = renderSimilarWizards(NUMBER_WIZARDS, getFirstName, FIRST_NAMES, getLasttName, LAST_NAMES, getCoatColor, COAT_COLORS, getEyesColor, EYES_COLORS, MIN_INDEX, MAX_INDEX_FIRST_NAME, MAX_INDEX_LAST_NAME, MAX_INDEX_COAT_COLOR, MAX_INDEX_EYES_COLOR);

  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.firstName + ' ' + wizard.lastName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    fragment.appendChild(getWizardElement(wizard));
  });

  similarListElement.appendChild(fragment);

  setup.querySelector('.setup-similar').classList.remove('hidden');
  setup.classList.remove('hidden');

})();
