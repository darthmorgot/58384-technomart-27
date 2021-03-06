(function() {
  'use strict';

  var dataModal = document.querySelectorAll('[data-modal]');
  var modal = document.querySelectorAll('.modal');

  var btnClose = document.querySelectorAll('.modal__close');
  var btnCart = document.querySelectorAll('.modal-cart__btn');

  var form = document.querySelector('.feedback__form');

  if (form) {
    var name = form.querySelector('[name=name]');
    var mail = form.querySelector('[name=email]');
    var message = form.querySelector('[name=message]');
    var error = form.querySelector('.feedback-form__error');
    var formWidth = 0;
  }

  var isStorageSupport = true;
  var safeName = '';
  var safeMail = '';

  try {
    safeName = localStorage.getItem('name');
    safeMail = localStorage.getItem('mail');
  } catch (err) {
    isStorageSupport = false;
  }

  function showModal(attr) {
    for (var i = 0; i < modal.length; i++) {
      if (modal[i].classList.contains(attr)) {
        modal[i].classList.add('modal--open');

        if (form) {
          if (safeName && safeMail) {
            name.value = safeName;
            mail.value = safeMail;
            message.focus();
          } else {
            name.focus();
          }
        }
      }
    }
  };

  function removeClass() {
    for (var i = 0; i < modal.length; i++) {
      modal[i].classList.remove('modal--open');
      modal[i].classList.remove('modal--close');
    }
  }

  function closeModal() {
    for (var i = 0; i < modal.length; i++) {
      if (modal[i].classList.contains('modal--open')) {
        modal[i].classList.add('modal--close');
        setTimeout(function() {
          removeClass();
        }, 500);
      }
    }

    if (form) {
      error.classList.remove('feedback-form__error--active');
      actionClass('remove');
    }
  };

  function btnCloseModal(btn) {
    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
      });
    }
  }

  function actionClass(act) {
    if (act == 'add') {
      name.classList.add('feedback-form__input--error');
      mail.classList.add('feedback-form__input--error');
    }
    if (act == 'remove') {
      name.classList.remove('feedback-form__input--error');
      mail.classList.remove('feedback-form__input--error');
    }
  }

  for (var i = 0; i < dataModal.length; i++) {
    dataModal[i].addEventListener('click', function(e) {
      e.preventDefault();
      var attr = e.target.getAttribute('data-modal');
      showModal(attr);
    });
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      if (!name.value || !mail.value) {
        e.preventDefault();
        error.classList.add('feedback-form__error--active');
        actionClass('remove');
        formWidth = form.offsetWidth;
        actionClass('add');
      } else {
        if (isStorageSupport) {
          localStorage.setItem('name', name.value);
          localStorage.setItem('mail', mail.value);
        }
      }
    });
  }

  btnCloseModal(btnClose);
  btnCloseModal(btnCart);

  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
      for (var i = 0; i < modal.length; i++) {
        if (modal[i].classList.contains('modal--open')) {
          e.preventDefault();
          closeModal();
        }
      }
    }
  });

})();
