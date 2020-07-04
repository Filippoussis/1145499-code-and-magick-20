'use strict';

(function () {

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];

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

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {

    window.render.wizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.filter.wizard.onEyesChange = function (color) {
    eyesColor = color;
    updateWizards();
  };

  window.filter.wizard.onCoatChange = function (color) {
    coatColor = color;
    updateWizards();
  };

  var onSuccess = function (data) {
    wizards = data;
    updateWizards();
  };

  window.load = {
    success: onSuccess,
  };

})();
