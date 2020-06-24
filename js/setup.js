'use strict';
(function () {

  var NUMBER_WIZARDS = 4;

  var Name = {
    FIRSTS: [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон',
    ],

    LASTS: [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг',
    ],
  };

  var Color = {
    COATS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)',
    ],

    EYES: [
      'black',
      'red',
      'blue',
      'yellow',
      'green',
    ],

    FIREBALL: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848',
    ],
  };

  /**
   * случайное значение из диапазона
   * @param {number} min - минимальное значение
   * @param {number} max - максимальное значение
   * @return {number} случайное значение
   */
  var getRandomBetween = function (min, max) {
    var random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  };

  /**
   * случайное значение из массива
   * @param {array} array - исходный массив значений
   * @return {*} случайное значение из массива
   */
  var getRandomElementFromArray = function (array) {
    return array[getRandomBetween(0, array.length - 1)];
  };

  /**
   * уникальное значение из массива
   * @param {array} array - исходный массив значений
   * @return {function} возвращает функцию, которая при каждом новом вызове возвращает уникальное значение из массива
   */
  var getUniqueElementFromArray = function (array) {
    var copyArray = array.slice();

    return function () {
      var randomIndexArray = getRandomBetween(0, copyArray.length - 1);
      return copyArray.splice(randomIndexArray, 1);
    };
  };

  var uniqueFirstNameFromArray = getUniqueElementFromArray(Name.FIRSTS);
  var uniqueLastNameFromArray = getUniqueElementFromArray(Name.LASTS);

  /**
   * генерирует объект мага
   * @return {object} возвращает объект мага с полями случайных значений
   */
  var generateWizard = function () {
    return {
      name: uniqueFirstNameFromArray() + ' ' + uniqueLastNameFromArray(),
      coatColor: getRandomElementFromArray(Color.COATS),
      eyesColor: getRandomElementFromArray(Color.EYES),
    };
  };

  /**
   * генерирует массив из объектов магов
   * @param {number} numberWizards - количество магов
   * @return {array} возвращает массив из объектов магов
   */
  var generateWizards = function (numberWizards) {
    var wizards = [];
    for (var i = 0; i < numberWizards; i++) {
      wizards.push(generateWizard());
    }

    return wizards;
  };

  var wizardsData = generateWizards(NUMBER_WIZARDS);

  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  /**
   * отрисовывает мага
   * @param {object} wizard - объект мага
   * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
   */
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  /**
   * складывает объекты магов во фрагмент
   * @param {array} wizards - массив объектов магов
   * @return {HTMLElement} возвращает фрагмент
   */
  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    wizards.forEach(function (wizard) {
      fragment.appendChild(renderWizard(wizard));
    });

    return fragment;
  };

  similarListElement.appendChild(renderWizards(wizardsData));

  setup.querySelector('.setup-similar').classList.remove('hidden');

  // Обработка событий: одеть Надежду

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');

  var onSetupEscPress = function (evt) {
    if (evt.key === 'Escape' && setupUserName !== document.activeElement) {
      evt.preventDefault();
      closeSetup();
    }
  };

  var openSetup = function () {
    setup.classList.remove('hidden');
    setupUserName.focus();
    document.addEventListener('keydown', onSetupEscPress);
  };

  var closeSetup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
  };

  setupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      openSetup();
    }
  });

  setupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      closeSetup();
    }
  });

  // Кастомизация персонажа

  var setupPlayer = setup.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var inputCoatColor = setupPlayer.querySelector('input[name = "coat-color"]');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var inputEyesColor = setupPlayer.querySelector('input[name = "eyes-color"]');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupPlayer.querySelector('input[name = "fireball-color"]');

  wizardCoat.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomCoatColor = getRandomElementFromArray(Color.COATS);
    inputCoatColor.value = wizardCoat.style.fill = randomCoatColor;
  });

  wizardEyes.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomEyesColor = getRandomElementFromArray(Color.EYES);
    inputEyesColor.value = wizardEyes.style.fill = randomEyesColor;
  });

  wizardFireball.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomFireballColor = getRandomElementFromArray(Color.FIREBALL);
    inputFireballColor.value = wizardFireball.style.backgroundColor = randomFireballColor;
  });

})();
