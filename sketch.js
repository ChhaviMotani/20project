
var car, wall;
var speed, weight;


function setup() {
  var canvas= createCanvas(1500,400);

  car=createSprite(50,200,50,50);
  car.velocityX = speed;

  wall=createSprite(1400,200,60, height/2);
  
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background("black");  
 


  if(wall.x -car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color("green");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color("yellow");
    }
    if(deformation<100){
      car.shapeColor=color("red");
    }
  }
  drawSprites();
  }
