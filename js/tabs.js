(function() {
  'use strict';

  var tabs = document.querySelector('.tabs__wrapper');
  var tabButtons = document.querySelector('.tabs__panel');

  function tabSwitch(attr) {
    for (var i = 0; i < tabs.children.length; i++) {
      tabs.children[i].classList.remove('tabs__item--active');
      if (tabs.children[i].classList.contains(attr)) {
        tabs.children[i].classList.add('tabs__item--active');
      }
    }
  }

  if (tabButtons) {
    tabButtons.addEventListener('click', function(e) {
      e.preventDefault();
      var attr = e.target.getAttribute('data-tab');

      if (e.target.classList.contains('tabs__switch--active')) return;

      for (var i = 0; i < tabButtons.children.length; i++) {
        tabButtons.children[i].classList.remove('tabs__switch--active');
      }

      e.target.classList.add('tabs__switch--active');
      tabSwitch(attr);
    });
  }

})();
