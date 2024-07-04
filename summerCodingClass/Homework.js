function setup() {

  createCanvas (400, 400)
  strokeWeight (4)

}

function draw() {

background(700, 155, 85)

fill(255, 192, 203)


for (let i=0; i<windowWidth; i=i+30) {
    line(i, 0, i, windowHeight)
  } 

  if(mouseIsPressed == true){
    background(125, 225, 125)
  }else{
    background(700, 155, 85)
  }
// legs

rect(125, 250, 25, 125)

rect(250, 250, 25, 125)

fill(0)

rect(125, 350, 25, 25)
rect(250, 350, 25, 25)

fill(255, 192, 203)

// body

ellipse(200, 200, 250, 200)

// ears

ellipse(165, 150, 25, 50)

ellipse(235, 150, 25, 50)

//face

circle(200, 200, 125)

// left eye

fill(125)

circle(175, 170, 25)

fill(0)

circle(175, 170, 10)

// right eye

fill(125)

circle(225, 170, 25)

fill(0)

circle(225, 170, 10)

// nose

fill(255, 192, 203)

ellipse(200, 210, 50, 25)

fill(0)

circle(190, 210, 10)

circle(210, 210, 10)

// mouth
noFill()
arc ( 200, 225, 50, 50, PI * .25, PI * .75 )


function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
}