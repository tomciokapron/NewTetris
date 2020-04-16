function setup(){
	scena = new cScena();
	scena.setup(40);
}

function draw(){
	scena.draw();
	if(keyIsDown(DOWN_ARROW))
		scena.setSpeed(10);
	else
		scena.setSpeed(30);
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		scena.turn(-1);
	} else if (keyCode === RIGHT_ARROW) {
	   scena.turn(1);
	} else if(keyCode === UP_ARROW){
		scena.rotate();
	}
}

