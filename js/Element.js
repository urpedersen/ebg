class Element {

  constructor(id,type,capacity,level,x,y) {
    this.id = id;
    this.type = type;
    this.capacity = capacity;
    this.level = level  
    this.x = x;
    this.y = y;
    this.connections = [];
    console.log("Construct " + this.type + " at (" + x + ", " + y + "), index = " + this.id);
    console.log("  level = " + this.level + ",  capacity = " + this.capacity);
  }

  setLevel(level){
     this.level = level;
  }

  setCapacity(capacity){
     this.capacity = capacity;
  }

  connect(element){
    this.connections.push(element);
    element.connections.push(this);
  }

  update(dt){
    switch(this.type){
      case "o-storage":
      // ARGhhhh, det er svært ...
      break;
    }
  }

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
