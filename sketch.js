var zombie = [];
var shooter;
var shooterImg,zomb1,zomb2;

function preload(){
shooterImg = loadImage("sprites/shooter.png")
}
function setup(){
createCanvas(400,400)
shooter = createSprite(200,200)
shooter.addImage(shooterImg)
}
function draw(){

background("lightGreen")
drawSprites();
}