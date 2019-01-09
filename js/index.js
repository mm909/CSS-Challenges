window.onload = function() {

  var parallaxBox = document.getElementById('circleWrapperSecondary');
  var c1left = document.getElementById('circle1').offsetLeft,
    c1top = document.getElementById('circle1').offsetTop,
    c2left = document.getElementById('circle2').offsetLeft,
    c2top = document.getElementById('circle2').offsetTop,
    c3left = document.getElementById('circle3').offsetLeft,
    c3top = document.getElementById('circle3').offsetTop

  parallaxBox.onmousemove = function(event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;

    mouseParallax('circle1', c1left, c1top, x, y, -75);
    mouseParallax('circle2', c2left, c2top, x, y, 50);
    mouseParallax('circle3', c3left, c3top, x, y, 125);
  }

}

function mouseParallax(id, left, top, mouseX, mouseY, speed) {
  var obj = document.getElementById(id);
  var parentObj = obj.parentNode,
    containerWidth = parseInt(parentObj.offsetWidth),
    containerHeight = parseInt(parentObj.offsetHeight);
  obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
  obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
}