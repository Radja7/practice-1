'use strict';

(function () {
  window.newWizard = {

    // генерирует объекты со свойствами магов
    create: function(numberOfPerson) {
      var wizards = [];

      for (var i = 0; i < numberOfPerson; i++){
        var persone = {};
        persone.name = window.utilities.getRandomItemOfArray(window.wizardsData.names);
        persone.surname = window.utilities.getRandomItemOfArray(window.wizardsData.surnames);
        persone.coatColor = window.utilities.getRandomItemOfArray(window.wizardsData.coatColors);
        persone.eyesColor = window.utilities.getRandomItemOfArray(window.wizardsData.eyesColors);
        wizards.push(persone);
      }

      return wizards;
    },

    render: function (wizard) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + " " + wizard.surname;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

      return wizardElement;
    },

    getFragment: function (wizards) {
      var fragment = document.createDocumentFragment();

      for(var i = 0; i < wizards.length; i++) {
        fragment.appendChild(window.newWizard.render(wizards[i]));
      }

      return fragment;
    },

  };
})();