class Element {

  constructor() {
    this.id = 0;
    this.label = "";
    this.x = 0;
    this.y = 0;
    this.connections = [];
  }
  
  set(id,label,x,y){
    this.id = id;
    this.label = label;
    this.x = x;
    this.y = y;
  }

  connect(element){
    this.connections.push(element);
    element.connections.push(this);
  }
  
  toConsole() {
    console.log("" + this.label + " at (" + this.x + ", " + this.y + "), index = " + this.id);  
  }

  draw() {
     // TODO
  }
}

class XConnector extends Element {
  

  draw() {
    var xConnectorSize = elementSize/2;
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.beginPath();
    ctx.moveTo(xConnectorSize/2,xConnectorSize/2);
    ctx.lineTo(-xConnectorSize/2,-xConnectorSize/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xConnectorSize/2,-xConnectorSize/2);
    ctx.lineTo(-xConnectorSize/2,xConnectorSize/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xConnectorSize,0);
    ctx.lineTo(0,xConnectorSize);
    ctx.lineTo(-xConnectorSize,0);
    ctx.lineTo(0,-xConnectorSize);
    ctx.lineTo(xConnectorSize,0);
    ctx.lineTo(0,xConnectorSize);
    ctx.stroke();
    ctx.restore();
  }
}

class OConnector extends Element {


  draw(){
    var oConnectorSize = elementSize/2;
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x,this.y);
    ctx.arc(0,0,oConnectorSize/2,0,2*Math.PI)
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(oConnectorSize,0);
    ctx.lineTo(0,oConnectorSize);
    ctx.lineTo(-oConnectorSize,0);
    ctx.lineTo(0,-oConnectorSize);
    ctx.lineTo(oConnectorSize,0);
    ctx.lineTo(0,oConnectorSize);
    ctx.stroke();
    ctx.restore();
}
  
}

class FlowSource extends Element {
  
}

class EffortSource extends Element {
  
}


// O-storage, e.g. a capacitor of spring
class OStorage extends Element {
  constructor(){
    super();
    this.level = 0;
    this.capacity = 1.0;
  }
  
  toConsole() {
    console.log(this.label + ": level = " + this.level + " capacity = " +  this.capacity + "   at (" + this.x + ", " + this.y + "), index = " + this.id);  
  }

  setLevel(level){
    this.level = level;
  }

  setCapacity(capacity){
    this.capacity = capacity;
  }

  draw(){
    var storageSize = elementSize*2;

    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x,this.y);
    ctx.arc(0,0,storageSize,0.5*Math.PI-0.2*Math.PI,0.5*Math.PI+0.2*Math.PI);
    // ctx.lineTo(-storageSize/2,0);
    // ctx.lineTo(-storageSize/2,-storageSize);
    // ctx.lineTo(0,-storageSize-storageSize/4);
    // ctx.lineTo(storageSize/2,-storageSize);
    // ctx.lineTo(storageSize/2,0);
    ctx.stroke();
    ctx.restore();
  } 
}



// O-storage, e.g. a capacitor of spring
class XStorage extends Element {
  constructor(){
    super();
    this.level = 0;
    this.capacity = 1.0;
  }
  
  toConsole() {
    console.log(this.label + ": level = " + this.level + " capacity = " +  this.capacity + "   at (" + this.x + ", " + this.y + "), index = " + this.id);  
  }

  setLevel(level){
    this.level = level;
  }

  setCapacity(capacity){
    this.capacity = capacity;
  }
}

class Leak extends Element {
  
}



