
let canvas 


let playButton


let r = 0
let g = 0
let b = 0



let baby 

let modem

let airstrikeFont


function preload(){
	baby = loadImage('dancingbaby2.gif')
	modem = loadSound ('ModemSound.mp3')
	airstrikeFont = loadFont('airstrike.ttf')

}




function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position('0, 0')




	playButton = createButton('Play Autio')
	playButton.position(100, 100)
	playButton.mousePressed(redBackground)
	

	modemRateSlider = createSlider(0, 1, 1, 0.01)
	modemRateSlider = createSlider(0, 1, 3, 1, 0.01)


}



function playMode(){
	if(!modem.isPlaying()) {
		modem.loop()
		playButton.html('pause Audio')
	}else{
		modem.pause()
		playButton.html('Play Audio')
	}
}
function redBackground(){
	r = 255
	g = 130
	b = 80
}

function draw(){
	background(r, g, b)
	image(baby, 400, 300, 350, 400)

	modem.setVolume(modemVolSlider.value())
	modem. rate(modemRateSlider.value())

	level = ampitude.getLevel()
	let size = map(level, 0, 6, 100, 900)
	ellipse(windowWidth/2, windowHeight/2, size, size)


	modem.setVolume(modemVolSlider.value())
	modem.rate(modemRateSlider.value())

}




function windowResized(){

	resizeCanvas(windowWidth, windowHeight)
}