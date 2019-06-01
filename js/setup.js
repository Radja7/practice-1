'use strict';

(function () {

  // Opening setup menu
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  // Finding template with data
  var similarListElement = document.querySelector('.setup-similar-list');

  var form = document.querySelector('.setup-wizard-form');

  window.setup = {
    successHandler: successHandler,
  };

  window.wizards.request();
  //var wizards = window.newWizard.create(window.wizardsData.numberOfPersone);
  similarListElement.appendChild(window.newWizard.getFragment(window.wizards.request));

  document.querySelector('.setup-similar').classList.remove('hidden');

  // Event listeners
  var userIcon = document.querySelector('.setup-open-icon');
  var userNameInput = document.querySelector('.setup-user-name');
  var wizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');


  setupOpen.addEventListener('click', function(evt){
    evt.preventDefault();
    openPopup();
    onSetupDefaultPosition();
  });
  setupClose.addEventListener('click', function(evt){
    evt.preventDefault();
    closePopup();
  });
  setupClose.addEventListener('keydown', function(evt){
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      closePopup();
    }
  });
  userIcon.addEventListener('keydown', function(evt){
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      openPopup();
      onSetupDefaultPosition();
    }
  });

  function wizardFireballClickHandler (evt) {
    var wizardFireballColor = window.utilities.getRandomItemOfArray(window.wizardsData.fireballColors);
    wizardFireball.style.backgroundColor = wizardFireballColor;
    wizardFireball.querySelector('input[name=fireball-color]').value = wizardFireballColor;
  }

  function wizardCoatClickHandler (evt) {
    var wizardCoatValue = window.utilities.getRandomItemOfArray(window.wizardsData.coatColors);
    wizardCoat.style.fill = wizardCoatValue;
    setupWizardAppearance.querySelector('input[name=coat-color]').value = wizardCoatValue;
  }

  function wizardEyesClickHandler (evt) {
    var wizardEyesValue = window.utilities.getRandomItemOfArray(window.wizardsData.eyesColors);
    wizardEyes.style.fill = wizardEyesValue;
    setupWizardAppearance.querySelector('input[name=eyes-color]').value = wizardEyesValue;
  }

  function inputValidityHandler () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  }

  function inputLengthValidityHandler (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  }

  function onPopupEscPress(evt) {
    if (evt.keyCode === window.constants.ESC_KEYCODE) {
      if(evt.target === userNameInput) {
        evt.stopPropagation();
      } else {
        closePopup();
      }
    }
  }

  function onSetupDefaultPosition (evt) {
    setup.style.top = '';
    setup.style.left = '';
  }

  function openPopup(){
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', wizardCoatClickHandler);
    wizardEyes.addEventListener('click', wizardEyesClickHandler);
    wizardFireball.addEventListener('click', wizardFireballClickHandler);
    userNameInput.addEventListener('invalid', inputValidityHandler);
    userNameInput.addEventListener('input', inputLengthValidityHandler);

    console.log('OPENNNNNNNNNNNN');
  }

  function closePopup(){
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', wizardCoatClickHandler);
    wizardEyes.removeEventListener('click', wizardEyesClickHandler);
    wizardFireball.removeEventListener('click', wizardFireballClickHandler);
    userNameInput.removeEventListener('invalid', inputValidityHandler);
    userNameInput.removeEventListener('input', inputLengthValidityHandler);
  }

  // functions
  function successHandler (evt) {
    closePopup();
    console.log('Отправил');
  }

})();
