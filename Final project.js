
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


	//draw player

	stroke(0);
	fill(150, 0, 170); 

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


}//close game

function keyPressed(){


}