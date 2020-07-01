'use strict';

(function () {

  var MAX_SIMILAR_WIZARD_COUNT = 4;

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
    wizards.forEach(function (wizard, index) {
      if (index < MAX_SIMILAR_WIZARD_COUNT) {
        fragment.append(renderWizard(wizard));
      }
    });

    similarListElement.append(fragment);
  };

  window.backend.load(renderWizards);
  setup.querySelector('.setup-similar').classList.remove('hidden');

})();
