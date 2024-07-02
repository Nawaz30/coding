
let furby

function preload(){
	furby = loadImage('furby.png')
}

function setup(){
 createCanvas(windowWidth, windowHeight);
 rectMode(CENTER)
 imageMode(CENTER)
}


function draw(){

	if(mouseIsPressed == true){
		background(255, 0, 0)
	}else{
		background(0, 0, 255)
	}
		image(furby, windowWidth/2, windowHeight/2, 500,500 )

	if(keyIsPressed == true){
		rect(windowWidth/2, windowHeight/2, 100, 100)
	}else{
		ellipse(windowWidth/2, windowHeight/2, 100, 100)
	}


}