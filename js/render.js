'use strict';

(function () {

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
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  /**
   * складывает объекты магов во фрагмент
   * @param {array} wizards - массив объектов магов
   */
  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    var takeNumber = wizards.length > window.data.NUMBER_WIZARDS ? window.data.NUMBER_WIZARDS : wizards.length;
    similarListElement.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      fragment.append(renderWizard(wizards[i]));
    }

    similarListElement.append(fragment);
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.render = {
    wizards: renderWizards,
  };

})();
