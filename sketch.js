const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


function setup() {

  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,800,20,options);
  World.add(myworld,ground);
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(myworld,ball);
}

function draw() {
  background(0);  
  Engine.update(myengine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}