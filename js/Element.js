class Element {

  constructor(type,id,x,y) {
    this.type = type;
    this.id = id;
    this.x = x;
    this.y = y;
    this.connections = [];
    console.log("Contruct element, index = " + this.id);
  }

  connect(e){
    this.connections.push(e);
    e.connections.push(this);
  }

}
