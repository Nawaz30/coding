
//global

let enemyTimer = 1

//game controle
var stage = 0; //keeps track of which function to run

//player

let p1X = 400; //p1 for player l

let p1Y = 375;

let pWidth = 80;

let pHeight = 80;


//boxes (platforms)

let b1X = 200; //bl for box
let b1Y = 300;
let bWidth = 200;
let bHeight = 40;

let b2X = 450;
let b2Y = 170;
let b2Width = 150;
let b2Height = 40;

let b3X = 70;
let b3Y = 200;
let b3Width = 50;
let b3Height = 40;

let b4X = 210;
let b4Y = 130;
let b4Width = 80;
let b4Height = 40;

let b5X = 650;
let b5Y = 120;
let b5Width = 90;
let b5Height = 30;

let b6X = 755;
let b6Y = 220;
let b6Width = 60;
let b6Height = 40;

let b7X = 90;
let b7Y = 255;
let b7Width = 10;
let b7Height = 90;

let b8X = 950;
let b8Y = 358;
let b8Width = 15;
let b8Height = 130;



//stars
let c1X = 600;
let c1Y = 410;
let cWidth = 30;
let cHeight = 30;


//enemies

let e1X = 200;
let e1Y = 400;
let eWidth = 50;
let eHeight = 50;





//counters
let score = 0;
let Lives = 2;
let lifeBool = false;
let Points = false;

let winBool = false
let startGameBool = true
//gravity 

let jump = false;  //are we jumping?

	let direction = 1; //the force of gravity in the y direction
	let velocity = 2;  //the steep of player
	let jumpPower = 15;  //the energy or strength of the player
	let fallingSpeed = 2;  //equal to velocity
	let minHeight = 395; //height of ground
	let maxHeight = 50; // height of sky
	let jumpCounter = 0; //keeps track of how much we are jumping




	//multimedia

	let furby;
	let platform;
	let landscape; //cant use background because it is already exist
	let star;
	let enemies;

	function preload (){
		furby = loadImage('furby.png');
		star = loadImage('starImage.png'); 
		enemies = loadImage('enemies.jpg')
	}
///////setup

	function setup () {

		createCanvas (800, 500);
		rectMode(CENTER);
		textAlign(CENTER);
		imageMode(CENTER);

		createCanvas (windowWidth, windowHeight)
		strokeWeight (4)


}//close setup


//draw



function draw(){
	//call functions

	background (150, 230, 240); /// sky blue



	if (startGameBool== true) {
		game();


	//close = 0
	}
	if (lifeBool == true){
		text ('YOU LOST!', windowWidth/2, windowHeight/2)
		text('your score was '+ score, windowWidth/2, windowHeight/2 +100)
	}

	

	if(winBool == true){
		winGame()
	}
	}



//function for our win screen 
function winGame(){
	background(0)
fill(225)
textSize(50)
text('you won!', 140, 100)
image(furby, windowWidth/2, windowHeight/2)
}






function game (){

	if (frameCount % 60 == 0 && enemyTimer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    enemyTimer --;
  }

	if(Lives == 0){
		startGameBool = false
		lifeBool = true;

	}

	if(score == 15){
	//	PointsBool = false
		winBool = true
		startGameBool = false
	}

	//grass
	noStroke();
	fill(100, 200, 5); //green
	rect(width/2, 600, width, 350);

	if(p1Y > 400){
		p1Y = 400

	}
	if(p1Y <= 40){
		p1Y = 40

	}


	if(p1X > 1050){
		p1X = 1050
	}

	if(p1X <= 30){
		p1X = 30
	}
	


	//window frame
	noFill();
	stroke(0);
	strokeWeight(15);
	rect(width/2, height/2, width, height);

	//draw box

	stroke(0);
	strokeWeight(5);
	fill(900, 30, 130); 
	rect(b1X, b1Y, bWidth, bHeight)
	rect(b2X, b2Y, b2Width, b2Height)
	rect(b3X, b3Y, b3Width, b3Height)
	rect(b4X, b4Y, b4Width, b4Height)
	rect(b5X, b5Y, b5Width, b5Height)
	rect(b6X, b6Y, b6Width, b6Height)
	rect(b7X, b7Y, b7Width, b7Height)
	rect(b8X, b8Y, b8Width, b8Height)

	if(dist(p1X, p1Y, c1X, c1Y )< 30 ){
		score+=1;
		c1X = random(30, windowWidth-30)
		c1Y = random (30, 400)

	}

	


	//draw player

	stroke(0);
	fill(150, 0, 170); 
	image (furby, p1X, p1Y, pWidth, pHeight) 

	//collision with boxes
    if(p1X >= b1X-bWidth/2 && p1X <= b1X+bWidth/2 && p1Y >= b1Y-bHeight/2 && p1Y <= b1Y+bHeight/2){

        if(p1X <= b1X+bWidth/2 && p1X >= b1X+(bWidth/2-5)){
            print("hit right side")
            p1X = p1X + 3
        }

        if(p1X >= b1X-bWidth/2 && p1X <= b1X-(bWidth/2-5)){
            print("hit left side")
            p1X = p1X - 3
        }
        if(p1Y >= b1Y-bHeight/2 && p1Y >= b1Y-(bHeight/2-5)){
            print("hit top side")
            p1Y = p1Y -3
        }

        if(p1Y <=  b1Y+bHeight/2 && p1Y >=  b1Y+(bHeight/2-5) ){
            print("hit bottom side")
            p1Y = p1Y +6
        }
    }

		//box 2

	 if(p1X >= b2X-b2Width/2 && p1X <= b2X+b2Width/2 && p1Y >= b2Y-b2Height/2 && p1Y <= b2Y+b2Height/2){

        if(p1X <= b2X+b2Width/2 && p1X >= b2X+(b2Width/2-5)){
            print("hit right side")
            p1X = p1X + 3
        }

        if(p1X >= b2X-b2Width/2 && p1X <= b2X-(b2Width/2-5)){
            print("hit left side")
            p1X = p1X - 3
        }
        if(p1Y >= b2Y-b2Height/2 && p1Y >= b2Y-(b2Height/2-5)){
            print("hit top side")
            p1Y = p1Y -3
        }

        if(p1Y <=  b2Y+b2Height/2 && p1Y >=  b2Y+(b2Height/2-5) ){
            print("hit bottom side")
            p1Y = p1Y +6
        }
    }


		//box 3

	 if(p1X >= b3X-b3Width/2 && p1X <= b3X+b3Width/2 && p1Y >= b3Y-b3Height/2 && p1Y <= b3Y+b3Height/2){

        if(p1X <= b3X+b3Width/2 && p1X >= b3X+(b3Width/2-5)){
            print("hit right side")
            p1X = p1X + 3
        }

        if(p1X >= b3X-b3Width/2 && p1X <= b3X-(b3Width/2-5)){
            print("hit left side")
            p1X = p1X - 3
        }
        if(p1Y >= b3Y-b3Height/2 && p1Y >= b3Y-(b3Height/2-5)){
            print("hit top side")
            p1Y = p1Y -3
        }

        if(p1Y <=  b3Y+b3Height/2 && p1Y >=  b2Y+(b2Height/2-5) ){
            print("hit bottom side")
            p1Y = p1Y +6
        }
    }


		//box 4

	 if(p1X >= b4X-b4Width/2 && p1X <= b4X+b4Width/2 && p1Y >= b4Y-b4Height/2 && p1Y <= b4Y+b4Height/2){

        if(p1X <= b4X+b4Width/2 && p1X >= b4X+(b4Width/2-5)){
            print("hit right side")
            p1X = p1X + 3
        }

        if(p1X >= b4X-b4Width/2 && p1X <= b4X-(b4Width/2-5)){
            print("hit left side")
            p1X = p1X - 3
        }
        if(p1Y >= b4Y-b4Height/2 && p1Y >= b4Y-(b4Height/2-5)){
            print("hit top side")
            p1Y = p1Y -3
        }

        if(p1Y <=  b4Y+b4Height/2 && p1Y >=  b4Y+(b4Height/2-5) ){
            print("hit bottom side")
            p1Y = p1Y +6
        }
    }






	 if(p1X >= b5X-b5Width/2 && p1X <= b5X+b5Width/2 && p1Y >= b5Y-b5Height/2 && p1Y <= b5Y+b5Height/2){

        if(p1X <= b5X+b5Width/2 && p1X >= b5X+(b5Width/2-5)){
            print("hit right side")
            p1X = p1X + 3
        }

        if(p1X >= b5X-b5Width/2 && p1X <= b5X-(b5Width/2-5)){
            print("hit left side")
            p1X = p1X - 3
        }
        if(p1Y >= b5Y-b5Height/2 && p1Y >= b5Y-(b5Height/2-5)){
            print("hit top side")
            p1Y = p1Y -3
        }

        if(p1Y <=  b5Y+b5Height/2 && p1Y >=  b5Y+(b5Height/2-5) ){
            print("hit bottom side")
            p1Y = p1Y +6
        }
    }



	 if(p1X >= b6X-b6Width/2 && p1X <= b6X+b6Width/2 && p1Y >= b6Y-b6Height/2 && p1Y <= b6Y+b6Height/2){

        if(p1X <= b6X+b6Width/2 && p1X >= b6X+(b6Width/2-5)){
            print("hit right side")
            p1X = p1X + 3
        }

        if(p1X >= b6X-b6Width/2 && p1X <= b6X-(b6Width/2-5)){
            print("hit left side")
            p1X = p1X - 3
        }
        if(p1Y >= b6Y-b6Height/2 && p1Y >= b6Y-(b6Height/2-5)){
            print("hit top side")
            p1Y = p1Y -3
        }

        if(p1Y <=  b6Y+b6Height/2 && p1Y >=  b6Y+(b6Height/2-5) ){
            print("hit bottom side")
            p1Y = p1Y +6
        }
    }


	 if(p1X >= b7X-b7Width/2 && p1X <= b7X+b7Width/2 && p1Y >= b7Y-b7Height/2 && p1Y <= b7Y+b7Height/2){

        if(p1X <= b7X+b7Width/2 && p1X >= b7X+(b7Width/2-5)){
            print("hit right side")
            p1X = p1X + 3
        }

        if(p1X >= b7X-b7Width/2 && p1X <= b7X-(b7Width/2-5)){
            print("hit left side")
            p1X = p1X - 3
        }
        if(p1Y >= b7Y-b7Height/2 && p1Y >= b7Y-(b7Height/2-5)){
            print("hit top side")
            p1Y = p1Y -3
        }

        if(p1Y <=  b7Y+b7Height/2 && p1Y >=  b7Y+(b7Height/2-5) ){
            print("hit bottom side")
            p1Y = p1Y +6
        }
    }


	 if(p1X >= b8X-b8Width/2 && p1X <= b8X+b8Width/2 && p1Y >= b8Y-b8Height/2 && p1Y <= b8Y+b8Height/2){

        if(p1X <= b8X+b8Width/2 && p1X >= b8X+(b8Width/2-5)){
            print("hit right side")
            p1X = p1X + 3
        }

        if(p1X >= b8X-b8Width/2 && p1X <= b8X-(b8Width/2-5)){
            print("hit left side")
            p1X = p1X - 3
        }
        if(p1Y >= b8Y-b8Height/2 && p1Y >= b8Y-(b8Height/2-5)){
            print("hit top side")
            p1Y = p1Y -3
        }

        if(p1Y <=  b8Y+b8Height/2 && p1Y >=  b8Y+(b8Height/2-5) ){
            print("hit bottom side")
            p1Y = p1Y +6
        }
    }
		// p1Y = p1Y ; //dont fall
		// p1X = p1X ;

		print("over square")
		//velocity = 0; //no speed because we arent falling
		 //close if on box



	//star
		image(star, c1X, c1Y, cWidth, cHeight);

//enemies
	//enemy1
		if(enemyTimer ==0){
			e1X = random(30, windowWidth)
			e1Y = random(30, 400)
			enemyTimer = 1
		}

	image(enemies, e1X,e1Y,eWidth, eHeight);

	if(dist(p1X, p1Y, e1X, e1Y) < 70){
		print('emeny hit')
	//hitting enemies 
	Lives = Lives-1;  //loos life
	p1X = 400;
	p1Y = 375;
	}
//close hit enemies

	//scoreboard

	textFont();
	fill(225)
	stroke(0);
	strokeWeight(5);
	textSize(30)
	text('Points: ' + score, 100, 50);
	//text(score,100, 50)



	//Lives

	textFont();
	fill(225)
	stroke(0);
	strokeWeight(5);
	textSize(30)
	text('Lives: ' + Lives, 225, 50);
	//text(Lives,200, 50)


	//circle(p1X, p1Y, pWidth, pHeight)

	if (keyIsDown(LEFT_ARROW) === true) {
		p1X -= 3;
	}

	if (keyIsDown(RIGHT_ARROW) === true) {
		p1X += 3;
	}

	if (keyIsDown(UP_ARROW) === true) {
		p1Y -= 3;
	}

	if (keyIsDown(DOWN_ARROW) === true) {
		p1Y += 3;
	}



}//close game

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

function keyPressed(){
	if (key === 'a') {
		print("jump")
  //	p1Y += 8
		jump = true
	}     
}
