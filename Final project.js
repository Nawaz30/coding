
//global



//game controle
var stage = 0; //keeps track of which function to run

//player

var p1X = 400; //pl for player l

var p1Y = 375;

var pWidth = 30;

var pHeight = 70;


//boxes (platforms)

var b1X = 200; //bl for box

var b1Y = 300;

var bWidth = 200;

var bHeight = 40;



//gravity 

var jump = false;  //are we jumping?

	var direction = 1; //the force of gravity in the y direction
	var velocity = 2;  //the steep of player
	var jumpPower = 15;  //the energy or strength of the player
	var fallingSpeed = 2;  //equal to velocity
	var minHeight = 375; //height of ground
	var maxHeight = 50; // height of sky
	var jumpCounter = 0; //keeps track of how much we are jumping















///////setup

function setup () {

createCanvas (800, 500);
rectMode(CENTER);
textAlign(CENTER);


}//close setup


//draw



function draw(){
	//call functions

if (stage == 0) {
	game();


	//close = 0
}

}



function game (){

	background (150, 230, 240); /// sky blue



	//grass
	noStroke();
	fill(100, 200, 5); //green
	rect(width/2, 450, width, 100);


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
	rect(450, 170, 150, 30)
	rect(70, 200, 50, 20)
	rect(210, 130, 80, 30)
	rect(650, 120, 50, 20)
	rect(755, 220, 60, 10)
	rect(90, 255, 10, 85)


	//draw player

	stroke(0);
	fill(150, 0, 170); 





	//collision
	if(p1X >= b1X-bWidth/2 && p1X <= b1X+bWidth/2 && p1Y >= b1Y-bHeight/2 && p1Y <= b1Y+bHeight/2){
		p1Y = p1Y; //dont fall
		velocity = 0; //no speed because we arent falling
	}  //close if on box


	//gravity
	function gravity(){
	
		if(p1Y >= minHeight && jump == false){
			//stop falling on the ground
		
		p1Y = p1Y;   //don't fall
		jumpCounter = 0; //reset jump counter when landing
	} // close on ground
	else{

		p1Y = p1Y + (direction*velocity);   //the code that makes gravity work
	}  //else fall

	if(jump == true) {
		if(p1Y <= maxHeight || jumpCounter >= jumpPower){
			if(p1Y >= minHeight){
				p1Y = minHeight
			}
			else{
				velocity = fallingSpeed;
			}
			velocity = fallingSpeed;  //fall at maximums
		}
		velocity = -jumpPower;   //not jumping
		jumpCounter = jumpCounter+1;  //add to jump counter
	}  //close jump

	else{
		velocity = fallingSpeed;
	} // close not jumping

	}   // close gravity


	circle(p1X, p1Y, pWidth, pHeight)

	if (keyIsDown(LEFT_ARROW) === true) {
    p1X -= 1;
  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    p1X += 1;
  }

  if (keyIsDown(UP_ARROW) === true) {
    p1Y -= 1;
  }

  if (keyIsDown(DOWN_ARROW) === true) {
    p1Y += 1;
  }

  if (keyIsDown('a')) {
  	jump = true;
  }else{
  	jump = false; 
  }
}//close game
