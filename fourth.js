let furby

let furbyX
let furbyY

//furby speed
let xSpeed = 3
let ySpeed = 3
let score = 0
let mouseDis
let startBool = true
let winBool = false


function preload(){
	furby = loadImage('furby.png')
}






function setup(){
	createCanvas(windowWidth, windowHeight)

	furbyX = windowWidth/2
	furbyY = windowHeight/2

	imageMode(CENTER)

}


function draw(){
	if(startBool == true){
		startGame()
	}

	if(winBool == true){
		winGame()
	}
}


//the function for our game
function startGame(){
	background(0)
	fill(225)
	text(50)


	text('Tage the furby! Loser your score is ' + score + 'points', 15, 100)

	image(furby, furbyX, furbyY, 50, 50)

	mouseDist = dist(mouseX, mouseY, furbyX, furbyY)

	furbyX = furbyX + xSpeed
	furbyY = furbyY + ySpeed
		
	if(furbyX >= windowWidth -25 || furbyX <= 25){
		xSpeed = xSpeed * -1
	}

	if(furbyY >= windowHeight || furbyY <= 25){
		ySpeed = ySpeed * -1
	}

	if(mouseDist < 25){
		score ++ 
		furbyX = random(26, windowWidth -26)
		furbyY = random(26, windowHeight -26)

		xSpeed = xSpeed * 1.2
		ySpeed = ySpeed * 1.2
	} 

	if(score == 25){
		startBool = false
		winBool = true
	}
	}



//function for our win screen 
function winGame(){
	background(0)
fill(225)
textSize(50)
text('you won!', 10, 100)
image(furby, windowWidth/2, windowHeight/2)
}




function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
