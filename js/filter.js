'use strict';

(function () {

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';

  var setup = document.querySelector('.setup');
  var setupPlayer = setup.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var inputCoatColor = setupPlayer.querySelector('input[name = "coat-color"]');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var inputEyesColor = setupPlayer.querySelector('input[name = "eyes-color"]');
  var wizardFireball = setupPlayer.querySelector('.setup-fireball-wrap');
  var inputFireballColor = setupPlayer.querySelector('input[name = "fireball-color"]');

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {

    var wizards = window.wizards;

    window.render.wizards(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  var onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  var onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  wizardCoat.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomCoatColor = window.util.getRandomElementFromArray(window.data.Color.COATS);
    inputCoatColor.value = wizardCoat.style.fill = randomCoatColor;
    onCoatChange(randomCoatColor);
  });

  wizardEyes.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomEyesColor = window.util.getRandomElementFromArray(window.data.Color.EYES);
    inputEyesColor.value = wizardEyes.style.fill = randomEyesColor;
    onEyesChange(randomEyesColor);
  });

  wizardFireball.addEventListener('click', function (evt) {
    evt.preventDefault();
    var randomFireballColor = window.util.getRandomElementFromArray(window.data.Color.FIREBALL);
    inputFireballColor.value = wizardFireball.style.backgroundColor = randomFireballColor;
  });

  window.filter = {
    updateWizards: updateWizards,
  };

})();
