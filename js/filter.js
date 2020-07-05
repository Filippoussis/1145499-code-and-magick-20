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

  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {},
  };

  wizardCoat.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomCoatColor = window.util.getRandomElementFromArray(window.data.Color.COATS);
    inputCoatColor.value = wizardCoat.style.fill = randomCoatColor;
    wizard.onCoatChange(randomCoatColor);
  });

  wizardEyes.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomEyesColor = window.util.getRandomElementFromArray(window.data.Color.EYES);
    inputEyesColor.value = wizardEyes.style.fill = randomEyesColor;
    wizard.onEyesChange(randomEyesColor);
  });

  wizardFireball.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomFireballColor = window.util.getRandomElementFromArray(window.data.Color.FIREBALL);
    inputFireballColor.value = wizardFireball.style.backgroundColor = randomFireballColor;
  });

  window.filter = {
    wizard: wizard,
  };

})();
