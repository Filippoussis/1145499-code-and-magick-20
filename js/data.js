'use strict';

(function () {

  var StartCoordsSetup = {
    TOP: 80 + 'px',
    LEFT: 50 + '%',
    TRANSFORM: 'translate(-50%)',
  };

  var uniqueFirstNameFromArray = window.util.getUniqueElementFromArray(window.mocks.Name.FIRSTS);
  var uniqueLastNameFromArray = window.util.getUniqueElementFromArray(window.mocks.Name.LASTS);

  /**
   * генерирует объект мага
   * @return {object} возвращает объект мага с полями случайных значений
   */
  var generateWizard = function () {
    return {
      name: uniqueFirstNameFromArray() + ' ' + uniqueLastNameFromArray(),
      coatColor: window.util.getRandomElementFromArray(window.mocks.Color.COATS),
      eyesColor: window.util.getRandomElementFromArray(window.mocks.Color.EYES),
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

  window.data = {
    wizardsData: generateWizards(window.mocks.NUMBER_WIZARDS),
    StartCoordsSetup: StartCoordsSetup,
  };

})();
