var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);
// var direction = {
// 	N:1,
// 	E:2,
// 	S:3,
// 	W:4,
// 	properties: {
// 		1:{rotation: -Math.PI/2, xAdd: 0             , yAdd:  -elementSize/2},
// 		2:{rotation:  0        , xAdd:  elementSize/2, yAdd:  0},
// 		3:{rotation:  Math.PI/2, xAdd: 0             , yAdd:  elementSize/2},
// 		4:{rotation:  Math.PI  , xAdd: -elementSize/2, yAdd:  0},
// 	}
// };


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
		var xDif = ele.x-ele.connections[i].x;
		var yDif = ele.y-ele.connections[i].y;
		// console.log(xDif,yDif);
		// if (xDif == 0){
		// 	if (yDif>0){
		// 		var dir = direction.N;
		// 	} else {
		// 		var dir = direction.S;
		// 	}
		// }
		// if (xDif>0){
		// 	var dir = direction.E;
		// } else {
		// 	var dir = direction.W;
		// }
		var rot =Math.atan(yDif/xDif);
		// console.log(rot);
		// console.log("Found an element");
		ctx.save();
		// ctx.translate(direction.properties[dir].xAdd,direction.properties[dir].yAdd);
		// drawConnection(ele,ele.connections[i],"none",dir);
		drawConnection(ele,ele.connections[i],"ef",rot);
		ctx.restore();
		ctx.rect(ele.connections[i].x,ele.connections[i].y,1,1);
	}
	ctx.fillStyle = "grey";
	ctx.fillRect(ele.x- elementSize/2,ele.y- elementSize/2,elementSize,elementSize);
	ctx.stroke();
};

function drawConnection(ele1,ele2,type,rot){
// function drawConnection(ele1,ele2,type,direc){
	// console.log(ele1,ele2);
	drawLine([ele1.x,ele1.y],[ele2.x,ele2.y]);
	var pos1 = [ele1.x+(ele2.x-ele1.x)/4,ele1.y+(ele2.y-ele1.y)/4];
	var pos2 = [ele1.x+3*(ele2.x-ele1.x)/4,ele1.y+3*(ele2.y-ele1.y)/4];
	// var pos2 = [3*(ele1.x-ele2.x)/4,3*(ele1.y-ele2.y)/4];
	// var rot = direction.properties[direc].rotation;
	console.log(rot);
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
		case "none":
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

function drawOConnector(pos){
	var oConnectorSize = elementSize/2;
	ctx.save();
	ctx.beginPath();
	ctx.translate(pos[0],pos[1]);
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

function drawXConnector(pos){
	var xConnectorSize = elementSize/2;
	ctx.save();
	ctx.beginPath();
	ctx.translate(pos[0],pos[1]);
	ctx.lineTo(xConnectorSize,xConnectorSize);
	// ctx.arc(0,0,oConnectorSize/2,0,2*Math.PI)
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

function drawFlowSource(pos){
	var flowSourceSize = elementSize/2;
	ctx.save();
	ctx.beginPath();
	ctx.translate(pos[0],pos[1]);
	ctx.lineTo(flowSourceSize,flowSourceSize);
	ctx.lineTo(0,0);
	ctx.lineTo(-flowSourceSize,flowSourceSize);
	ctx.lineTo(0,0);
	ctx.lineTo(flowSourceSize,-flowSourceSize);
	ctx.lineTo(0,0);
	ctx.lineTo(-flowSourceSize,-flowSourceSize);
	ctx.lineTo(0,0);
	ctx.stroke();
	ctx.restore();
}

function drawEffortSource(pos){
	var effortSourceSize = elementSize/2;
	ctx.save();
	ctx.beginPath();
	ctx.translate(pos[0],pos[1]);
	ctx.arc(0,0,effortSourceSize,0,2*Math.PI);
	ctx.stroke();
	ctx.restore();
}