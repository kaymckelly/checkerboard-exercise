// Your JS goes here

// get body
(function() {
  'use strict';
  var body = document.getElementsByTagName('body')[0];

  // write function to generate random colors
  var colorDat = function() {
    Math.floor(Math.random() * 255);
    return Math.floor(Math.random() * 255);
  };

  // for loop to generate checkerboard divs
  for (var i = 0; i < 63; i++) {
    var checkDiv = document.createElement('div');

    checkDiv.style.float = 'left';
    checkDiv.style.width = '11.1%';
    checkDiv.style.paddingBottom = '11.1%';

    // hideous implementation to satisfy eslint with the
    // break between lines 23 and 24
    checkDiv.style.backgroundColor = 'rgb(' +
    colorDat() + ', ' + colorDat() + ', ' + colorDat() + ')';
    body.appendChild(checkDiv);
  }
})();
