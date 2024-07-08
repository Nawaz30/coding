

let squareNums= [25, 36, 49, 64, 81, 100]



function setup(){
	createCanvas(windowWidth, windowHeight)

	print(squareNums.length)

		background(120)

		for(let i = 0; i<squareNums.length; i++){
			let posX = random(100, windowWidth-100)
			let posY = random(100, windowWidth-100)

			fill(224, 66, 200)
			ellipse(posX, posY, squareNums[i], squareNums[i])
			fill(0)
			textSize(25)
			text(squareNums[i], posX, posY)
		}
}

function draw(){
	
	

}


