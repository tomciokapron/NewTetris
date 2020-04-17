
function cBlok(){
	this.shapes = floor(random(0,6));
	this.colorr = [random(255),random(255),random(255)];
	// this.shapes__ = [
	// 	[0,0, 0,1],
	// 	[0,0, 0,1, 0,2],
	// 	[0,0, 0,1, 0,2, 0,3],
	// 	[0,0, 0,1, 0,2, 1,2],
	// 	[1,0, 1,1, 1,2, 0,2],
	// 	[0,0, 0,1, 0,2, 1,1]
	// ];
	this.shapes__ = [
		[4,-1, 4,0],
		[4,-1, 4,0, 4,1],
		[4,-1, 4,0, 4,1, 4,2],
		[4,-1, 4,0, 4,1, 5,1],
		[5,-1, 5,0, 5,1, 4,1],
		[4,-1, 4,0, 4,1, 5,0]
	];
	this.position = this.shapes__[this.shapes];
	this.active = true;
	this.R = 0;
	this.update = function(){
		if(this.active){
			for(i = 0; i<this.position.length; i++){
				if(i % 2 == 1 )
					this.position[i]+=1;
			}
		}
	}

	this.getColor = function(){
		return this.colorr;
	}

	this.moveDown = function(){
		for(i = 0; i<this.position.length; i++){
				if(i % 2 == 1 )
					this.position[i]+=1;
			}
	}

	this.moveLeft = function(skręć){
		if(this.active && this.checkTheLeft() > 0){
			for(i = 0; i<this.position.length; i++){
				if(i % 2 == 0 )
					this.position[i]+=skręć;
			}
		}
	}

	

	this.moveRight = function(skręć){
		if(this.active && this.checkTheRight()  < 9){
			for(i = 0; i<this.position.length; i++){
				if(i % 2 == 0 )
					this.position[i]+=skręć;
			}
		}
	}

	this.checkTheLowest = function(){
		var theLowest = -1;
		for(i = 0; i<this.position.length; i++){
			if(i % 2 == 1 )
				if(this.position[i] > theLowest)
					theLowest = this.position[i];
		}
		return theLowest;
	}

	this.checkTheLeft = function(){
		var Left = 10;
		for(i = 0; i<this.position.length; i++){
			if(i % 2 == 0 )
				if(this.position[i] < Left)
					Left = this.position[i];
		}
		return Left;
	}

	this.checkTheRight = function(){
		var Right = 0;
		for(i = 0; i<this.position.length; i++){
			if(i % 2 == 0 )
				if(this.position[i] > Right)
					Right = this.position[i];
		}
		return Right;
	}



	this.setDisactive = function(){
		this.active = false;
	}

	this.setPosition = function(n){
		this.position = n;
	}

	this.setShape = function(n){
		this.shapes = n;
	}

	this.setR = function(n){
		this.R = n;
	}

	this.getPosition = function(){
		return this.position;
	}

	this.getShape = function(){
		return this.shapes;
	}

	this.getR = function(){
		return this.R;
	}

	this.rotate = function(){
		if(true){
			switch(this.shapes){
				case 0:{
					if(this.R == 0){
						this.position[2]+=1;
						this.position[3]-=1;
						this.R = 1;
					} else if(this.R == 1){
						this.position[2]-=1;
						this.position[3]+=1;
						this.R = 0;
					}
					break;
				}

				case 1:{
					if(this.R == 0){
						this.position[2]+=1;
						this.position[3]-=1;
						this.position[4]+=2;
						this.position[5]-=2;
						this.R = 1;
					} else if(this.R == 1){
						this.position[2]-=1;
						this.position[3]+=1;
						this.position[4]-=2;
						this.position[5]+=2;
						this.R = 0;
					}
					break;
				}

				case 2:{
					if(this.R == 0){
						this.position[2]+=1;
						this.position[3]-=1;
						this.position[4]+=2;
						this.position[5]-=2;
						this.position[6]+=3;
						this.position[7]-=3;
						this.R = 1;
					} else if(this.R == 1){
						this.position[2]-=1;
						this.position[3]+=1;
						this.position[4]-=2;
						this.position[5]+=2;
						this.position[6]-=3;
						this.position[7]+=3;
						this.R = 0;
					}
					break;
				}

				case 3:{
					if(this.R == 0){
						this.position[0]-=1;
						this.position[1]+=1
						this.position[2]+=0;
						this.position[3]-=0;
						this.position[4]+=1;
						this.position[5]-=1;
						this.position[6]+=0;
						this.position[7]-=2;
						this.R = 1;
					} else if(this.R == 1){
						this.position[0]+=1;
						this.position[1]+=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]-=1;
						this.position[5]-=1;
						this.position[6]-=2;
						this.position[7]+=0;
						this.R = 2;
					} else if(this.R == 2){
						this.position[0]+=1;
						this.position[1]-=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]-=1;
						this.position[5]+=1;
						this.position[6]-=0;
						this.position[7]+=2;
						this.R = 3;
					} else if(this.R == 3){
						this.position[0]-=1;
						this.position[1]-=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]+=1;
						this.position[5]+=1;
						this.position[6]+=2;
						this.position[7]+=0;
						this.R = 0;
					}
					break;
				}

				case 4:{
					if(this.R == 0){
						this.position[0]-=1;
						this.position[1]+=1
						this.position[2]+=0;
						this.position[3]-=0;
						this.position[4]+=1;
						this.position[5]-=1;
						this.position[6]+=2;
						this.position[7]-=0;
						this.R = 1;
					} else if(this.R == 1){
						this.position[0]+=1;
						this.position[1]+=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]-=1;
						this.position[5]-=1;
						this.position[6]-=0;
						this.position[7]-=2;
						this.R = 2;
					} else if(this.R == 2){
						this.position[0]+=1;
						this.position[1]-=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]-=1;
						this.position[5]+=1;
						this.position[6]-=2;
						this.position[7]+=0;
						this.R = 3;
					} else if(this.R == 3){
						this.position[0]-=1;
						this.position[1]-=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]+=1;
						this.position[5]+=1;
						this.position[6]+=0;
						this.position[7]+=2;
						this.R = 0;
					}
					break;
				}

				case 5:{
					if(this.R == 0){
						this.position[0]-=1;
						this.position[1]+=1
						this.position[2]+=0;
						this.position[3]-=0;
						this.position[4]+=1;
						this.position[5]-=1;
						this.position[6]-=1;
						this.position[7]-=1;
						this.R = 1;
					} else if(this.R == 1){
						this.position[0]+=1;
						this.position[1]+=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]-=1;
						this.position[5]-=1;
						this.position[6]-=1;
						this.position[7]+=1;
						this.R = 2;
					} else if(this.R == 2){
						this.position[0]+=1;
						this.position[1]-=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]-=1;
						this.position[5]+=1;
						this.position[6]+=1;
						this.position[7]+=1;
						this.R = 3;
					} else if(this.R == 3){
						this.position[0]-=1;
						this.position[1]-=1
						this.position[2]-=0;
						this.position[3]+=0;
						this.position[4]+=1;
						this.position[5]+=1;
						this.position[6]+=1;
						this.position[7]-=1;
						this.R = 0;
					}
					break;
				}

			}
		}
	}
}