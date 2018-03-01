var lastX;
var lastY;

var pic = document.getElementById('vimage');
var clearButton = document.getElementById('clear');

var drawDot = function(e) {
  var dot = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );

  dot.setAttribute("cx", e.offsetX);
  dot.setAttribute("cy", e.offsetY);
  dot.setAttribute("r", "10");
  dot.setAttribute("fill", "red");
  dot.setAttribute("stroke", "blue");

  pic.appendChild(dot);

}

var connect = function(e) {

  if (lastX) {

    console.log('there is a lastX');
    var line = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    );

    line.setAttribute('x1', e.offsetX);
    line.setAttribute('y1', e.offsetY);
    line.setAttribute('x2', lastX);
    line.setAttribute('y2', lastY);
    line.setAttribute('stroke', 'blue');
    line.setAttribute('stroke-width', '1');

    pic.appendChild(line);
  }

  lastX = e.offsetX;
  lastY = e.offsetY;
  console.log('NEW LASTX: ' + lastX);
  console.log('NEW LASTY: ' + lastY);

}

var draw = function(e) {
  drawDot(e);
  connect(e);
  console.log('drawing!');
}

var clear = function(e) {
  while (pic.lastChild) {
    pic.removeChild(pic.lastChild);
  }
  lastX = null;
  lastY = null;
}

pic.addEventListener('click', draw);
clearButton.addEventListener('click', clear);
