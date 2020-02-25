(function() {
  'use strict';

  var slides = document.querySelectorAll('.slider__item');

  var arrows = document.querySelectorAll('.slider__arrow');
  var dots = document.querySelectorAll('.slider__dot');

  function slideSwitch() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.toggle('slider__item--active');
    }
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('slider__dot--active');
    }
  }

  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function(e) {
      e.preventDefault();
      slideSwitch();
    });
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function(e) {
      e.preventDefault();
      if (!e.target.classList.contains('slider__dot--active')) {
        slideSwitch();
      }
    });
  }

})();

