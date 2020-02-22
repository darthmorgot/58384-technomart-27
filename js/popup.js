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
    for (var item of modal) {
      if (item.classList.contains(attr)) {
        item.classList.add('modal--open');

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

  function closeModal() {
    for (var item of modal) {
      item.classList.remove('modal--open');
      error.classList.remove('feedback-form__error--active');
    }
  };

  function btnCloseModal(btn) {
    for (var item of btn) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
      });
    }
  }

  for (var item  of dataModal) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var attr = e.target.getAttribute('data-modal');
      showModal(attr);
    });
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      if (!name.value || !mail.value) {
        e.preventDefault();
        error.classList.remove('feedback-form__error--active');
        modal.offsetWidth = modal.offsetWidth;
        error.classList.add('feedback-form__error--active');
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
      for (var item of modal) {
        if (item.classList.contains('modal--open')) {
          e.preventDefault();
          closeModal();
        }
      }
    }
  });

})();

