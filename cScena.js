function cScena(){
	
	createCanvas(400,600);
	this.frameCounter = frameCount;

	this.speed = 30;
	this.fast = 5;
	this.normal = 30;//_.cloneDeep(this.speed);

	this.setup = function(blockSize){
		this.w = blockSize;
 		cols = floor(width/this.w); 
 		rows = floor(height/this.w);
 		this.grid = this.make2Darray(cols,rows);
 		this.active = new cBlok();
 		this.points = 0;
 		this.level = 1;
 	}


 	//----------------------------------------------------



 	this.draw = function(){
 		this.frameUpdate();
 		background(51);
 		this.printGrid();
 		this.printActive();
 		this.printGridArr();
 		this.printPoints();
 		this.checkIfCanGoLower();
 		this.checkRows();
 	}


 	this.frameUpdate = function(){
 		if(frameCount - this.frameCounter >= this.speed){
 			this.frameCounter = frameCount;
 			//this.checkIfCanGoLower();
 			this.active.update();
 			console.log(this.speed);
 		}
 	}

 	this.updatePoints = function(){
 		this.points+=1;
 		if(this.points	% 2 == 0){
 			//this.speed -= 3;
 			this.normal -= 3;	
 			//console.log("hej");
 		}
 		//console.log(this.normal);
 	}


 	this.updateSpeed = function(n){
 		this.speed += n;
 	}

 	this.printPoints = function(){
 		textSize(32);
 		text('points: ' + this.points, 250, 30);
 		text('level: ' + this.level, 250, 65);
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
 			fill(this.active.getColor());
 			square(this.active.getPosition()[i*2]*this.w, 
 					this.active.getPosition()[(i*2)+1]*this.w ,this.w);
 		}
 	}

 	this.printGridArr = function(){
 		for (var i = 0; i < cols; i++) {
 			for (var j = 0; j < rows; j++) {
 				if(this.grid[i][j] != undefined){  //tutaj
 					fill(this.grid[i][j]);
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
				if(this.grid[this.active.getPosition()[i]][this.active.getPosition()[i+1]+1] != undefined){ //tutak
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
 				
				if(n == 10){
 					this.deleteRow(i);
 					// this.points += 1;
 					// if(this.points % 2 == 0){
 					// 	this.level += 1;
 					// 	this.speed -= 0.5;
 					// 	this.normal = _.cloneDeep(this.speed);

 					// }
 					// console.log(this.normal);
				}
 			}
 		}
 		//return -1;
 	}

 	this.deleteRow = function(j){
 		this.updatePoints();
 		for (var i = 0; i < cols; i++) {
 			this.grid[i].splice(j,1);
 			this.grid[i].unshift(undefined);
 			//console.log("deleted");
 		}
 	}

 	this.changeActive = function(){
 		for (var i = 0; i < this.active.getPosition().length; i+=2) {
 			this.grid[this.active.getPosition()[i]][this.active.getPosition()[i+1]] = this.active.getColor();  //tutaj
 		}
 		this.active = new cBlok();
 	}

 	this.setSpeed = function(speed){
 		this.speed = speed;
 	}

 	this.getSpeed = function(){
 		return this.speed;
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
			if(this.grid[this.active.getPosition()[i]+n][this.active.getPosition()[i+1]] != undefined){ //tutaj
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

	this.rotatee = function(){
		var rotated = _.cloneDeep(this.active);
		
		rotated.rotate();
	
		var flag = 0;
		for (var i = 0; i < rotated.getPosition().length; i+=2) {
			//zabezpieczenie przed wypadaniem poza tor
			if (rotated.getPosition()[i] < 0 || rotated.getPosition()[i] >= cols){
				flag = 1;
				break;
			}
			if (rotated.getPosition()[i+1] > rows) {
				flag = 1;
				break;
			}
			//zabezpieczenie przed obracaniem w istniejące klocki
			if(this.grid[rotated.getPosition()[i]][rotated.getPosition()[i]] != undefined){  //tutaj
				flag = 1;
				break;
			}
			
		}

		console.log(flag);

		if(flag == 0){
			console.log('obrucilem');	
			this.active.rotate();
		}
	}	
	
}