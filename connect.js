var pic = document.getElementById('vimage');

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

var connect = function

pic.addEventListener('click', drawDot);
