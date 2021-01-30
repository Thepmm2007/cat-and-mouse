var garden;
var tom,cat1,cat2,cat3,cat4;
var jerry,mouse1,mouse4,mouse2,mouse3;

function preload() {
    //load the images here
    garden = loadImage ("garden.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    cat3 = loadImage("cat3.png");
    cat4 = loadImage("cat4.png");
    mouse1 = loadImage("mouse1.png");
    mouse2 = loadImage("mouse2.png");
    mouse3 = loadImage("mouse3.png");
    mouse4 =loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    tom = createSprite(300,300);
    tom.addImage("cat1Img",cat1);
    jerry = createSprite(300,300);
    jerry.addImage("mouse1Img",mouse1);
}

function draw() {

    background(255);
    garden.addImage("garden1",garden);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width - jerry.width/2){
        tom.addImage("lastImg",cat4)
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === Left_Arrow){
        tom.velocityX = -5;
        tom.addAnimation("running",cat2);
        tom.changeAnimation("running");
    }

}
