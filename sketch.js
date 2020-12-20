var car,wall;
var speed=0,weight=0;

function preload(){
  WhiteCar=loadImage("White Car.png");
  GreenCar=loadImage("Green Car.png");
  YellowCar=loadImage("Yellow Car.png");
  RedCar=loadImage("Red Car.png");
}
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.addImage(WhiteCar);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
}
function draw() {
  background("black");
  car.velocityX=speed;
  if(wall.x-car.x<=(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.addImage(RedCar);
    }
    if(deformation<180 && deformation>100){
      car.addImage(YellowCar);
    }
    if(deformation<100){
      car.addImage(GreenCar);
    }
  }
  car.collide(wall);
  drawSprites();
}