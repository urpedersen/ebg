var gridSize = 64;
var elementSize = 20;
var elements = [];

window.onload = function() {
  console.log("load setup()");

  // Scale the entire canvas
  ctx.scale(3,3);

  // For drawing tests
  var pos1 = [40,40];
  drawFlowSource(pos1);
  var pos2 = [80,40];
  drawEffortSource(pos2);

  // Construct elements
  var C = new OStorage();
  C.set(0,"Capacitor" ,  gridSize ,gridSize);
  var X  = new XConnector(); 
  X.set(1,"X-Connection", 2*gridSize,gridSize);
  var R  = new Leak();
  R.set(2,"Resistor"   ,3*gridSize,gridSize);
  
  // Connect elements
  C.connect(X);
  R.connect(X);
  
  // Add elements to array
  elements.push(C);
  elements.push(X);
  elements.push(R);
  
  // Print elements
  for (e of elements) e.toConsole();
  
  // Draw elements
  for (e of elements) drawElement(e);
  
};
