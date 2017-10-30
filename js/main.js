var elements = [];

window.onload = function() {
  console.log("load setup()");

  var first = new Element("o-storage",0,10,10);
  elements.push(first);
  var second = new Element("leak",1,30,30);
  first.connect(second);
  elements.push(second);
};

