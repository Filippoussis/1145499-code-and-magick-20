'use strict';

(function () {

  var setup = document.querySelector('.setup');

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, window.error.on);
    evt.preventDefault();
  });

})();
