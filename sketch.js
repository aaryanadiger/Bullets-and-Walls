var bullet, wall;

var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
 
  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, 400/2);
  wall.shapeColor = color(80,80,80);

  speed= random(223,321);
  weight= random(30,52);

  damage = 0.5 * weight * speed * speed /(thickness *thickness *thickness);
}

function draw() {
  background(0);  

  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed /(thickness *thickness *thickness);

    if(damage >= 10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0,255,0);
    }

  }

  drawSprites();
}

function hasCollided(bulletright,wallleft){
  bulletRightEdge = bulletright.x + bulletright.width;
  wallLeftEdge = wallleft.x;

 if(bulletRightEdge>=wallLeftEdge){
    return true;
 }
 return false;

}