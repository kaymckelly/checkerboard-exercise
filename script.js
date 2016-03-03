// get body
(function() {
  'use strict';
  var body = document.getElementsByTagName('body')[0];

  // write function to generate random colors
  var colorDat = function() {
    return Math.floor(Math.random() * 256);
  };

  // for loop to generate checkerboard divs
  for (var i = 0; i < 63; i++) {
    var checkDiv = document.createElement('div');
    checkDiv.id = i;

    checkDiv.style.float = 'left';
    checkDiv.style.width = '11.1%';
    checkDiv.style.paddingBottom = '11.1%';
    checkDiv.style.backgroundColor = 'rgb(' +
    colorDat() + ', ' + colorDat() + ', ' + colorDat() + ')';
    body.appendChild(checkDiv);
  }

  var flashy = function() {
    for (var j = 0; j < 63; j++) {
      var special = document.getElementById(j);
      special.style.backgroundColor = 'rgb(' +
      colorDat() + ', ' + colorDat() + ', ' + colorDat() + ')';
    }
  }
  function testFunc(){
    console.log("interval is running");
  }

  window.setInterval(flashy, 2000);


})();
