'use strict';

(function () {

  var similarList = document.querySelector('.setup-similar-list');
  var errorMessage = document.querySelector('.error-message');

  window.wizards = {
    numberOfPersone: 4, // количество волшебников в списке
    request: request,
    loadList: []
  };

  function loadHandler (data) {

    var randomNumber;

    for (var i = 0; i < window.wizards.numberOfPersone; i++) {
      var count = data.length - 1;
      randomNumber = window.utilities.getRandomInteger(0, count);
      window.wizards.loadList.push(data[randomNumber]);
      data.splice(randomNumber, 1);
    }

    //data.splice(window.wizardsData.numberOfPersone, data.length);
    //window.wizards.loadList = data;

    var similarListElement = document.querySelector('.setup-similar-list');
    similarListElement.appendChild(window.newWizard.getFragment(window.wizards.loadList));
    //window.filter.updateWizards(window.wizards.loadList);
  }

  function errorHandler (errText) {
    console.log('Ошибка загрузки персонажей: ' + errText);

    if(similarList.children.length === 0) {

      var newTag = document.createElement('p');
      newTag.classList.add('error');
      newTag.innerHTML = 'Произошла ошибка загрузки данных';
      similarList.appendChild(newTag);

    }
  }

  function request() {
    window.backend.load(loadHandler, errorHandler);
  }


})();

