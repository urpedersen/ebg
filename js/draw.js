var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);
var direction = {
	N:1,
	E:2,
	S:3,
	W:4,
	properties: {
		1:{rotation: -Math.PI/2},
		2:{rotation:  0        },
		3:{rotation:  Math.PI/2},
		4:{rotation:  Math.PI},
	}
};


// var pos1 = [1,2];
// var pos2 = [56,20];
// drawLine(pos1,pos2);




// drawElement(elements[0]);
// drawConnection(element1,element2);


function drawLine(p1,p2){
  ctx.moveTo(p1[0],p1[1]);
  ctx.lineTo(p2[0],p2[1]);
  ctx.stroke();
};

function drawElement(ele){
	for (var i = 0; i<= ele.connections.length-1;i++){
		// console.log("Found an element");
		drawConnection(ele,ele.connections[i],"emf",direction.E);
		ctx.rect(ele.connections[i].x,ele.connections[i].y,1,1);
	}
	ctx.fillStyle = "black";
	ctx.fillRect(ele.x- elementSize/2,ele.y- elementSize/2,elementSize,elementSize);
	ctx.stroke();
};

function drawConnection(ele1,ele2,type,direc){
	// console.log(ele1,ele2);
	drawLine([ele1.x,ele1.y],[ele2.x,ele2.y]);
	var pos1 = [ele1.x+(ele2.x-ele1.x)/4,ele1.y+(ele2.y-ele1.y)/4];
	var pos2 = [ele1.x+3*(ele2.x-ele1.x)/4,ele1.y+3*(ele2.y-ele1.y)/4];
	// var pos2 = [3*(ele1.x-ele2.x)/4,3*(ele1.y-ele2.y)/4];
	var rot = direction.properties[direc].rotation;
	switch(type){
		case "ef":
			drawBar(pos1,rot);
			drawArrow(pos2,rot);
			break;
		case "emf":
			drawBar(pos1,rot);
			drawArrow(pos2,rot+Math.PI);
			break;
		case "fe":
			drawArrow(pos1,rot)
			drawBar(pos2,rot)
			break;
		case "mfe":
			drawArrow(pos1,rot+Math.PI)
			drawBar(pos2,rot)
			break;
		default:
			console.log("Error drawing line");
	}
};

function drawBar(pos,rot){
	ctx.save();
	ctx.translate(pos[0],pos[1]);
	ctx.rotate(rot);
	ctx.moveTo(0,-elementSize/2);
	ctx.lineTo(0,+elementSize/2);
	ctx.restore();
}

function drawArrow(pos,rot){
	ctx.save();
	ctx.translate(pos[0],pos[1]);
	ctx.rotate(rot);
	ctx.moveTo(-elementSize/2,-elementSize/2);
	ctx.lineTo(0,0);
	ctx.lineTo(-elementSize/2,+elementSize/2);
	ctx.stroke();
	ctx.restore();
}