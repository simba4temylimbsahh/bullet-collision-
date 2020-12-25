var bullet, wall, speed, weight;
var thickness

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 20, 5);

  speed = random(55, 90)
  weight = random(400, 1500)
  thickness = random(22, 83)
  

  bullet.velocityX = speed
  bullet.shapoeColor = "white"

  wall = createSprite(1200, 200, 60, height)

  wall.shapeColor = color(230,230,230)
}

function draw() {
  background(0);  
  
  if(isCollided(bullet,wall)){

   bullet.velocityX = 0
  
   var b = 0.5*weight*speed*speed/(thickness*thickness*thickness)

   if(b>10){

    wall.shapeColor = "red"

   }

   if(b<10){

    wall.shapeColor = "green"
   }

  }
  
  drawSprites();
}

function isCollided(b,w){

  bulletRightEdge = b.x + b.width

  wallLeftEdge = w.x

  if(bulletRightEdge>wallLeftEdge){

    return true
  }

  return false
}