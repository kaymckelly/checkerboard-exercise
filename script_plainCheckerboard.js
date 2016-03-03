// Your JS goes here

//get body
var body = document.getElementsByTagName("body")[0];

//for loop to generate checkerboard divs
for (var i = 0; i < 63; i++) {
  var checkDiv = document.createElement("div");

  //styling the boxes to the correct size and using float to make them display in rows rather than inline
  checkDiv.style.float = "left";
  checkDiv.style.width = "11.1%";
  checkDiv.style.paddingBottom = "11.1%";

  //setting color of squares
  if (i % 2 === 0) {
    checkDiv.style.backgroundColor = "black";
  } else {
    checkDiv.style.backgroundColor = "red";
  };

  //add checkerboards to DOM
  body.appendChild(checkDiv);
}
