Template.draw.events({


	"click .js-start": function(event){
		running = true;
		window.requestAnimationFrame(drawStuff);
	},

	"click .js-stop": function(event){
		running = false;
	},

	"click .js-draw-triangle": function(event){
		drawTriangle();
	//	window.requestAnimationFrame(drawStuff);
	},

})


function drawTriangle() {
	drawContext = drawSpace.getContext("2d");
	drawContext.strokeStyle="#ff0000"; // or green or "#fff"
	drawContext.moveTo(100,100);
	drawContext.lineTo(150,100);
	drawContext.lineTo(125,150);
	drawContext.lineTo(100,100);
	drawContext.stroke();
}


let running=true;

function decPart(x) {
	//console.log(x-Math.floor(x));
	return x - Math.floor(x);
}

var angle = 0;

function drawStuff(){
	var time = new Date();

	var secs = time.getSeconds()+time.getMilliseconds()/1000.0;
	//console.log(secs);
	var drawContext = drawSpace.getContext("2d");
	var my_gradient = drawContext.createLinearGradient(0,0,600,0);
	my_gradient.addColorStop(decPart(secs/10),"red");
	my_gradient.addColorStop(decPart(secs/10+0.33),"green");
	my_gradient.addColorStop(decPart((secs/10+0.66)),"blue");
	drawContext.fillStyle=my_gradient;


	drawContext.fillRect(0,0,600,300);


	drawContext.save();
	drawContext.translate(300,150);
	drawContext.rotate(100*secs/360*(2*Math.PI));
    drawContext.translate(-300,-150);
	drawContext.fillStyle="blue";
	drawContext.fillRect(250,100,100,100);
	drawContext.restore();

	drawContext.fillStyle="red";
	drawContext.fillRect(290,145,20,10);
	drawContext.fillRect(295,140,10,20);
	if (running)
		window.requestAnimationFrame(drawStuff);
}

//Template.draw.rendered = drawStuff;
