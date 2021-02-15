const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,700,50,50);
    pig1 = new Pig(800, 700)
    box2 = new Box(900,700,50,50);
    log1 = new Log(800, 680, 300, PI/2);
    box3 = new Box(700,630,50,50);
    pig2 = new Pig(800, 630)
    box4 = new Box(900,630,50,50);
    log2 = new Log(800, 620, 300, PI/2);
    box5 = new Box(800, 570, 50, 50);
    log3 = new Log(820, 570, 100, PI/-7);
    log4 = new Log(780, 570, 100, PI/7);
    bird1 = new Bird(100, 100)
    ground = new Ground(900,height,1800,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display()
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}