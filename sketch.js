var bimg, b1,b2,b3,b4,b5;
var roof;
var r1,r2,r3,r4,r5;

function preload(){
    bimg=loadImage("pink.png");
}

function setup(){
    var canvas=createCanvas(1000,1000);
    b1=createSprite(200,500,20,20);
    b1.addImage(bimg);
    b1.scale=0.2;

    //b1.stroke("black");
    b2=createSprite(280,500,20,20);
    b2.addImage(bimg);
    b2.scale=0.2;
    

    b3=createSprite(380,500,20,20);
    b3.addImage(bimg);
    b3.scale=0.2;

    b4=createSprite(480,500,20,20);
    b4.addImage(bimg);
    b4.scale=0.2;

    b5=createSprite(580,500,20,20);
    b5.addImage(bimg);
    b5.scale=0.2;
    roof= createSprite(400,210,450,20);
    roof.shapeColor="black";    
    r1= createSprite(200,340,10,250);
    r1.shapeColor="yellow"
r2=  createSprite(280,340,10,250);
r2.shapeColor="yellow"
 r3= createSprite(380,340,10,250);
 r3.shapeColor="yellow"
 r4 =  createSprite(480,340,10,250);
 r4.shapeColor="yellow"
 r5 =  createSprite(580,340,10,250);
 r5.shapeColor="yellow"

}

function draw(){
    background("blue");

    drawSprites();
}