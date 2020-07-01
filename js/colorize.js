'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupPlayer = setup.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var inputCoatColor = setupPlayer.querySelector('input[name = "coat-color"]');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var inputEyesColor = setupPlayer.querySelector('input[name = "eyes-color"]');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupPlayer.querySelector('input[name = "fireball-color"]');

  wizardCoat.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomCoatColor = window.util.getRandomElementFromArray(window.mocks.Color.COATS);
    inputCoatColor.value = wizardCoat.style.fill = randomCoatColor;
  });

  wizardEyes.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomEyesColor = window.util.getRandomElementFromArray(window.mocks.Color.EYES);
    inputEyesColor.value = wizardEyes.style.fill = randomEyesColor;
  });

  wizardFireball.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomFireballColor = window.util.getRandomElementFromArray(window.mocks.Color.FIREBALL);
    inputFireballColor.value = wizardFireball.style.backgroundColor = randomFireballColor;
  });

})();
