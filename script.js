// get body
(function() {
  'use strict';
  var body = document.getElementsByTagName('body')[0];

  // for loop to generate checkerboard divs
  for (var i = 0; i < 63; i++) {
    var checkDiv = document.createElement('div');

    checkDiv.style.float = 'left';
    checkDiv.style.width = '11.1%';
    checkDiv.style.paddingBottom = '11.1%';

    // colors inspired by: http://www.colourlovers.com/palette/52719/Bonjour%7CDiscogranny
    var colorA = 'rgb(' + 253 + ', ' + i*4 + ', ' + 79 + ')';
    var colorB = 'rgb(' + 243 + ', ' + 215 + ', ' + i*4 + ')';

    i%2 === 0 ? checkDiv.style.backgroundColor = colorA : checkDiv.style.backgroundColor = colorB;

    body.appendChild(checkDiv);
  }
})();
