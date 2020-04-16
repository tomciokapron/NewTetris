function cScena(){
	
	createCanvas(400,600);
	this.frameCounter = frameCount;
	this.speed = 30;
	
	this.setup = function(blockSize){
		this.w = blockSize;
 		cols = floor(width/this.w); 
 		rows = floor(height/this.w);
 		this.grid = this.make2Darray(cols,rows);
 		this.active = new cBlok();
 		// import _ from "lodash";
 	}


 	//----------------------------------------------------



 	this.draw = function(){
 		this.frameUpdate();
 		background(51);
 		this.printGrid();
 		this.printActive();
 		this.printGridArr();
 		this.checkIfCanGoLower();
 		this.checkRows();
 	}


 	this.frameUpdate = function(){
 		if(frameCount - this.frameCounter >= this.speed){
 			this.frameCounter = frameCount;
 			this.active.update();
 		}
 	}

 	
 	this.printGrid = function(){
 		for(var i=0; i<rows; i++){
			line(0, i*this.w, width, i*this.w);
		}

		for(var j=0; j<cols; j++){
			line(j*this.w, 0, j*this.w, height);
		}
 	}

 	this.printActive = function(){
 		for (var i = 0; i < this.active.getPosition().length/2; i++) {
 			fill(255,204,0);
 			square(this.active.getPosition()[i*2]*this.w, 
 					this.active.getPosition()[(i*2)+1]*this.w ,this.w);
 		}
 	}

 	this.printGridArr = function(){
 		for (var i = 0; i < cols; i++) {
 			for (var j = 0; j < rows; j++) {
 				if(this.grid[i][j] == 1){
 					fill(255,204,0);
 					square(i*this.w, j*this.w, this.w);
 				}
 			}
 		}
 	}

 	this.checkIfCanGoLower = function(){
		if(this.active.checkTheLowest() == rows-1){
			
			this.changeActive();
		}
		else {
			for (var i = 0; i < this.active.getPosition().length; i+=2) {
				if(this.grid[this.active.getPosition()[i]][this.active.getPosition()[i+1]+1] == 1){
					this.changeActive();
				}
			}
		}	
 	}

 	this.checkRows = function(){
 		for(var i = 0; i < rows; i++){
 			var n = 0;
 			for(var j = 0; j < cols; j++){
 				if(this.grid[j][i]==undefined)
 					break;
 				else
 					n++;
 				
				if(n == 10)
 					this.deleteRow(i);
 			}
 		}
 		//return -1;
 	}

 	this.deleteRow = function(j){
 		for (var i = 0; i < cols; i++) {
 			this.grid[i].splice(j,1);
 			this.grid[i].unshift(undefined);
 			//console.log("deleted");
 		}
 	}

 	this.changeActive = function(){
 		for (var i = 0; i < this.active.getPosition().length; i+=2) {
 			this.grid[this.active.getPosition()[i]][this.active.getPosition()[i+1]] = 1;
 		}
 		this.active = new cBlok();
 	}

 	this.setSpeed = function(speed){
 		this.speed = speed;
 	}

 	this.make2Darray = function(cols, rows){
		var arr = new Array(cols);
		for (var i = 0; i < arr.length; i++)
			arr[i] = new Array(rows);
		return arr;
	}

	this.turn = function(n){ //n=1 prawo n=-1lewo
		var flag = 0;
		for (var i = 0; i < this.active.getPosition().length; i+=2) {
			if(this.grid[this.active.getPosition()[i]+n][this.active.getPosition()[i+1]] == 1){
				flag = 1;

				break;
			}
		}
		
		if(flag == 0){
			if(n == 1)
				this.active.moveRight(1);
			else if(n == -1)
				this.active.moveLeft(-1);
		}
	}

	this.rotate = function(){
		var rotated = new cBlok();
		rotated.setShape(Object.assign({}, this.active.getShape()));
		rotated.setPosition(Object.assign({}, this.active.getPosition()));
		rotated.rotate();
		var flag = 0;
		for (var i = 0; i < rotated.getPosition().length; i+=2) {
			//zabezpieczenie przed wypadaniem poza tor
			console.log(rotated.getPosition()[i]);
			if (rotated.getPosition()[i] < 0 || rotated.getPosition()[i] >= cols){
				flag = 1;
				break;
			}
			if (rotated.getPosition()[i+1] > rows) {
				flag = 1;
				break;
			}
			//zabezpieczenie przed obracaniem w istniejące klocki
		}
		
		if(flag == 0){	
			console.log(flag);
			this.active.rotate();
		}
	}	
	
}