'use strict';

(function () {

  var onSuccess = function (data) {
    window.wizards = data;
    window.filter.updateWizards();
  };

  window.load = {
    success: onSuccess,
  };

})();
