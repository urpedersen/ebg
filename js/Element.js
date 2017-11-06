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

/*
  update(dt){
    switch(this.type){
      case "o-storage":
      // ARGhhhh, det er svært ...
      break;
    }
  }
*/

/*
  update(dt) {
    swich(this.type){
    case "leak":
      //   
      break;
    case "o-storage":
      //   
      break;
    }
  }
*/
}


class Xconnection extends Element {
  
}

class Oconnection extends Element {
  
}

// O-storage, e.g. a capacitor 
class Ostorage extends Element {

  

  setLevel(level){
    this.level = level;
  }

  setCapacity(capacity){
    this.capacity = capacity;
  }
}

class leak extends Element {
  
}



