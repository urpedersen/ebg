var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 100, 100);
var direction = {
	N:1,
	E:2,
	S:3,
	W:4,
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
		drawConnection(ele,ele.connections[i]);
		ctx.fillRect(ele.connections[i].x,ele.connections[i].y,10,10);
	}
	ctx.rect(ele.x,ele.y,40,40);
	ctx.stroke();
};

function drawConnection(ele1,ele2){
	// console.log(ele1,ele2);
	drawLine([ele1.x,ele1.y],[ele2.x,ele2.y]);
};