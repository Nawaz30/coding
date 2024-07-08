


let capture


function setup(){
	createCanvas(800, 240)

	capture = createCapture(VIDEO)
capture.size(640, 480)
capture.hide()

}

function draw(){
img.filter(INVERT);
image(capture, mouseX, mouseY, mouseX,mouseY)
ellipse(mouseX, mouseY 50, 50)
}