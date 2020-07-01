'use strict';

(function () {

  var setup = document.querySelector('.setup');
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
    setup.style.top = '';
    setup.style.left = '';
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

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });

})();
