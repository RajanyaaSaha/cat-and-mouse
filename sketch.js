var tom,tomImage;
var jerry, jerryImage;
var background,backgroundImage;
function preload() {
    //load the images here
tomImage =loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
jerryImage =loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
backgroundImage=loadAnimation("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(200,100,50,50);
    jerry=createSprite(300,100,50,50);


}

function draw() {

    background(backgroundImage);
    
    //Write condition here to evalute if tom and jerry collide
    

    

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX= -5;
        cat.addAnimmation("catRunninng",catImage2);
        cat.changeAnimation("catRunning");
           }	


if(cat.x-mouse.x<(cat.width-mouse.width)/2)
{
cat.addAnimation("catLastImage",catImage3);
cat.changeAnimation("catLastImage");
}
}
