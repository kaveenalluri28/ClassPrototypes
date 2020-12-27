const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground; // variables for objects

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

  box1 = new Boxes(300,200,70,70); // makes a prototype with required properties(x,y,width ,height) of class

  box2 = new Boxes(250,100,60,100);

  ground  = new Ground(500,690,1000,20);

    
}

function draw(){
    background(0);
    Engine.update(engine); // updates the physical forces everytime

    box1.display(); // display the prototype of class
    box2.display();

    ground.display();


}

// steps: to make a box / any object

 // var creation of body (memory for body)
 // making a soul for it
 // making options
 // including options in soul
 // include the soul into world

 //draw part
 
 // rectMode to center. 
 //draw the body part(dummy) 
 // attach soul's x and y positions

