
let furby

let greenVar
let redVar
let blueVar



function preload(){
	furby = loadImage('furby.png')
}

function setup(){
 createCanvas(windowWidth, windowHeight);
 rectMode(CENTER)
 imageMode(CENTER)
 //background(random(255), random(255), random(255))
 let greenVar = random(0,45)
	let redVar = random(0, 24)
	let blueVar = random(0, 280)
	background(greenVar, redVar, blueVar)
	for(let i=0; i<100; i++) {
		ellipse(random(windowWidth), random(windowHeight), 20, 20)
		image(furby, random(windowWidth), random(windowHeight), 40, 40)
	}
}


function draw(){

	if(mouseIsPressed == true){
		background(255, 0, 0)
	}else{
		background(0, 0, 255)
	}

	for (let i=0; i<windowWidth; i=i+10) {
		line(i, 0, i, windowHeight)
	}	


		image(furby, windowWidth/2, windowHeight/2, 300,300 )
	

	if(keyIsPressed == true){
		rect(windowWidth/2, windowHeight/2, 100, 100)
	}else{
		ellipse(windowWidth/2, windowHeight/2, 100, 100)
	}


}


function mouseReleased(){
	let greenVar = random(0,45)
	let redVar = random(0, 24)
	let blueVar = random(0, 280)
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}


















