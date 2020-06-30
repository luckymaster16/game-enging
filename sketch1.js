const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, ball, world,ground;
function setup(){
createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var ground_options={
isStatic:true
}
ground=Bodies.rectangle(200,380,400,30,ground_options);
var ball_options={
    restitution:1
    }
ball=Bodies.circle(200,200,40,ball_options);
World.add(world,ground);
World.add(world,ball);
}
function draw(){
background(0);
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,10);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);
}