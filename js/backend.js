'use strict';

(function () {

  window.backend = {
    load: load,
    save: save
  };

  var URL = 'https://js.dump.academy/code-and-magick';
  var STATUS_OK = 200;
  var TIME_OUT = 10000;

  function load (onLoad, onError) {
    //alert('ДААА');
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if(xhr.status === STATUS_OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа ' + xhr.status + ' ' + xhr.statusText);
      }

    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос нее успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIME_OUT;

    xhr.open('GET', URL + '/data');
    xhr.send();
  }

  function save (data, onLoad, onError) {

    var xhr = XMLHttpRequest();
    xhr.respanseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_OK) {
        onLoad();
      } else {
        onError('Статус ответа ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос нее успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIME_OUT;

    xhr.open('POST', URL);
    xhr.send(data);

  }

})();