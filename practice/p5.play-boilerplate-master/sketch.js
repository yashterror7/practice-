const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine ;
var world;
var box,box1,box2,box3,box4;
var ground;
var pig,pig2;
var log,log2,log3,log4;

function setup() {
  createCanvas(1600,400);
 engine = Engine.create();
 world = engine.world;
 
box = new Box(700,340,50,50);
box1 = new Box(900,340,50,50);
log = new Log(800,310,310,PI/2);

ground = new Ground(800,350,1600,50);
pig = new Pig(800,345);
bird = new Bird(300,200);

box2 =new Box(700,300,50,50);
box3 = new Box(900,300,50,50);
pig2 = new Pig(800,310) ;
log2= new Log(800,290,300,PI/2);

box4= new Box(800,250,50,50);
log3= new Log(750,250,200,PI/7);
log4=new Log(850,250,200,-PI/7);

}

function draw() {
  background(0);  
  Engine.update(engine);
  box.display();
  box1.display();
  ground.display();
  box2.display();
  pig.display();
  bird.display();
  log.display();
  box3.display();
  pig2.display();
  log2.display();
  box4.display();
  log3.display();
  log4.display();
}