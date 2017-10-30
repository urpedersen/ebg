class Element {

  constructor(type,id,x,y) {
    this.type = type;
    this.id = id;
    this.x = x;
    this.y = y;
    this.connections = [];
    console.log("Construct " + this.type + " at (" + x + ", " + y + "), index = " + this.id);

    //swich(this.type)
  }

  /*setO(O){
     this.O = =;
  }*/

  connect(e){
    this.connections.push(e);
    e.connections.push(this);
  }

}
