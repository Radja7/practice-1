'use strict';

(function() {
  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    window.backend.save(new FormData(form), window.setup.successHandler, window.utilities.errorHandler);
  });

})();