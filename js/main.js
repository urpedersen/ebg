var elementSize = 20;
var elements = [];

window.onload = function() {
  console.log("load setup()");

  var first = new Element(0,"o-storage",1.0,1.0,10,10);
  elements.push(first);
  var second = new Element(1,"leak",1.0,1.0,30,60);
  first.connect(second);
  elements.push(second);


  drawElement(elements[0]);
  drawElement(elements[1]);
};
