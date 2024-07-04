let furby


let furbyBrushBool = false
let ellipseBrushBool = false


function preload() {
	furby = loadImage('furby.png')
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	background(255)
	imageMode(CENTER)
}

function draw(){
	if(furbyBrushBool == true){
		furbyBrush()
	}
	if (ellipseBrushBool == true){
		ellipseBrush()
	}
	
}
function furbyBrush(){
	image(furby, mouseX, mouseY, 50, 50)
}

function ellipseBrush() {
	fill(random(255), random(255), random(255))
	ellipse(mouseX, mouseY, 50, 50)
}


function keyPressed(){
	if (key === 'q'){
		furbyBrushBool = true
		ellipseBrushBool = false

	}

	if (key === 'w'){
		furbyBrushBool = false
		ellipseBrushBool = true

	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
