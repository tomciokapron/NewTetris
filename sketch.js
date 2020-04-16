

function setup(){
	scena = new cScena();
	scena.setup(40);
}

function draw(){
	scena.draw();
	if(keyIsDown(DOWN_ARROW)){
		scena.setSpeed(scena.fast);
	}
	else
		scena.setSpeed(scena.normal);
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		scena.turn(-1);
	} else if (keyCode === RIGHT_ARROW) {
	   scena.turn(1);
	} else if(keyCode === UP_ARROW){
		scena.rotatee();
	}
}

