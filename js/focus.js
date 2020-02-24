(function() {
  'use strict';

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

  // var link = document.querySelectorAll('.product__title a');
  var product = document.querySelectorAll('.product');
  var btnBuy = document.querySelectorAll('.product__btn--buy');
  var btnBookmark = document.querySelectorAll('.product__btn--bookmark');

  if(getInternetExplorerVersion() !== -1) {

    for (var i = 0; i < product.length; i++) {
      product[i].addEventListener('focusin', function(e) {
        if (!this.classList.contains('product--focus')) {
          this.classList.add('product--focus');
        }
      });

      product[i].addEventListener('focusout', function(e) {
        // this.classList.remove('product--focus');
      });
    }

  }


})();
