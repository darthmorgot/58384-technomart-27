(function() {
  'use strict';

  let body = document.body;

  let feedback = document.querySelector('.modal__feedback');
  let map = document.querySelector('.modal__map');
  let cart = document.querySelector('.modal__cart');

  let btnFeedback = document.querySelector('.contacts__btn');
  let btnMap = document.querySelector('.contacts__map');
  let btnCart = document.querySelectorAll('.product__btn--buy');

  let btnClose = document.querySelectorAll('.modal__close');

  btnFeedback.addEventListener('click', (e) => {
    e.preventDefault();
    feedback.classList.add('modal__open');
  });

  btnMap.addEventListener('click', (e) => {
    e.preventDefault();
    map.classList.add('modal__open');
  });

  for (let item of btnCart) {
    item.addEventListener('click', (e) => {
      cart.classList.add('modal__open');
    });
  }

  for (let item of btnClose) {
    item.addEventListener('click', (e) => {
      e.target.closest('.modal__open').classList.remove('modal__open');
    });
  }

  body.addEventListener('click', (e) => {

    // console.log(e.target);
  });

})();
