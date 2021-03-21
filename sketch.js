const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var night;
var Thunder, thunder1, thunder2,thunder3,thunder4;
var thunderCreateFrame = 0;

function preload(){
    thunder1 = loadImage("P-31 pictures/thunderBolt/1.png");
    thunder2 = loadImage("P-31 pictures/thunderBolt/2.png");
    thunder3 = loadImage("P-31 pictures/thunderBolt/3.png");
    thunder4 = loadImage("P-31 pictures/thunderBolt/4.png");
    manImg = loadImage("P-31 pictures/Walking Frame/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png");
}

function setup(){
    var canvas = createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,500);

    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrop(random(0,500),random(0,500)));
    }
   }

function draw(){
    Engine.update(engine);
    background(night);

    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreateFrame = frameCount;
        Thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1:Thunder.addImage(thunder1);
            break;
            case 2:Thunder.addImage(thunder2);
            break;
            case 3:Thunder.addImage(thunder3);
            break;
            case 4:Thunder.addImage(thunder4);
            break;
            default: break;
        }
        Thunder.destroy();
    }
    if(thunderCreateFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   

