'use strict';

var NUMBER_OF_PERSON = 4;
var WIZARD_NAMES = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var WIZARD_SURNAMES = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var EYES_COLORS = ['black','red','blue','yellow','green'];

//// ФУНКЦИИ /////

// Случайный номер элемента массива
var getRandomInteger = function (min, max){
  return Math.floor(Math.random() * (max - min - 1)) + min;
};

// Возвращает случайное значение из массива
var getRandomItemOfArray = function (array) {
  return array[getRandomInteger(0, array.length)];
}

// функция генерирует объекты со свойствами магов
function wizardsMock(numberOfPerson) {
  var wizards = [];

  for (var i = 0; i < numberOfPerson; i++){
    var persone = {};
    persone.name = getRandomItemOfArray(WIZARD_NAMES);
    persone.surname = getRandomItemOfArray(WIZARD_SURNAMES);
    persone.coatColor = getRandomItemOfArray(COAT_COLORS);
    persone.eyesColor = getRandomItemOfArray(EYES_COLORS);
    wizards.push(persone);
  }

  return wizards;
}


document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector
('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + " " + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var createSimilarList = function (wizards) {
  var fragment = document.createDocumentFragment();

  for(var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  return fragment;
}

var wizards = wizardsMock(NUMBER_OF_PERSON);
similarListElement.appendChild(createSimilarList(wizards));


document.querySelector('.setup-similar').classList.remove('hidden');