function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  bgImg = loadImage("snow3.jpg")
}

function draw() {
  background(255,255,255);  
  background.image(bgImg)
  drawSprites();
}