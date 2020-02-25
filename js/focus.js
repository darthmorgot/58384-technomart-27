(function() {
  'use strict';

  var product = document.querySelectorAll('.product');
  var buttons = document.querySelectorAll('.product__buttons');

  function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
    } else if (navigator.appName == 'Netscape') {
      var ua = navigator.userAgent;
      var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
    }
    return rv;
  }

  if(getInternetExplorerVersion() !== -1) {

    function btnFocus() {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('focusin', function(e) {
          this.classList.add('product__buttons--focus');
        });

        buttons[i].addEventListener('focusout', function(e) {
          this.classList.remove('product__buttons--focus');
        });
      }
    }

    for (var i = 0; i < product.length; i++) {
      product[i].addEventListener('focusin', function(e) {
        if (!this.classList.contains('product--focus')) {
          this.classList.add('product--focus');
          btnFocus();
        }
      });

      product[i].addEventListener('focusout', function(e) {
        if (this.classList.contains('product--focus')) {
          this.classList.remove('product--focus');
          btnFocus();
        }
      });
    }

  }

})();
