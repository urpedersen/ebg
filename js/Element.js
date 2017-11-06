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
  
}

class OConnector extends Element {
  
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



