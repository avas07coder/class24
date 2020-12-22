const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground
var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var rlog1,rlog2,rlog3,rlog4;
var biard;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    biard =new bird(100,100);
    ground = new Ground(800,height,1600,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    pig1 = new piggy(810,350);
    pig2 = new piggy(810,220);
    rlog1= new log(810,260,300,PI/2);
    rlog2= new log(810,180,300,PI/2);
    rlog3= new log(760,120,150,PI/7);
    rlog4= new log(870,120,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    biard.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    rlog1.display();
    rlog2.display();
    rlog3.display();
    rlog4.display();
}