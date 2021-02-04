
var zomb1,zomb2,zomb3;
var shooter;
var shooterImg;
var bgImg;
var zombImg1,zombImg2,zombImg3;

function preload(){
shooterImg = loadImage("sprites/shooter.png");
bgImg = loadImage("sprites/ground.jpg");
zombImg1 = loadImage("sprites/zomb1.png");
zombImg2 = loadImage("sprites/zomb2.png");
zombImg3 = loadImage("sprites/zomb3.png");
}
function setup(){
createCanvas(displayWidth,displayHeight)
shooter = createSprite(200,200)
shooter.addImage(shooterImg)
shooter.scale = 0.5;

}
function draw(){

background(bgImg);
spawnObstacles();
drawSprites();
camera.x = shooter.x;
camera.y = shooter.y;
}
function spawnObstacles() {
    if(frameCount % 30 === 0) {
      var zomb = createSprite(random(0,displayWidth-40),random(-200,displayHeight),200,200);
      zomb.velocityX = -4;
      
      //generate random obstacles
      var rand = Math.round(random(1,3));
      switch(rand) {
        case 1:
        zomb.addImage(zombImg1);
                break;
        case 2: 
        zomb.addImage(zombImg2);
                break;
        case 3:
        zomb.addImage(zombImg3);
                break;
 
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      zomb.scale = 0.8;
      zomb.lifetime = 600;
      //add each obstacle to the group
     // zomb.add(obstacle);
     
    }
  }
