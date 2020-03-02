(function() {
  'use strict';

  var slides = document.querySelectorAll('.slider__item');
  var arrows = document.querySelector('.slider__arrows');
  var dots = document.querySelectorAll('.slider__dot');

  var count = 0;

  function slideSwitch(elem, index) {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('slider__item--active')) {
        count = i;
      }
      slides[i].classList.remove('slider__item--active');

      if (dots[i]) {
        dots[i].classList.remove('slider__dot--active');
      }
    }

    if (elem) {
      if (elem.classList.contains('slider__arrow-next')) {
        count++;
        if (count >= slides.length) {
          count = 0;
        }
      } else if (elem.classList.contains('slider__arrow-prev')) {
        count--;
        if (count < 0) {
          count = slides.length - 1;
        }
      }

      slides[count].classList.add('slider__item--active');
      dots[count].classList.add('slider__dot--active');
    }

    if (index || index == 0) {
      slides[index].classList.add('slider__item--active');
      dots[index].classList.add('slider__dot--active');
    }
  }

  arrows.addEventListener('click', function(e) {
    e.preventDefault();
    slideSwitch(e.target, null);
  });

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.add('num_' + i);

    dots[i].addEventListener('click', function(e) {
      e.preventDefault();
      if (e.target.classList.contains('slider__dot--active')) return;
      var index = this.className.slice(-1);

      slideSwitch(null, index);
    });
  }

})();
