var shipImage, ship

var seaImage, sea

function preload()
{
      shipImage=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png","ship-3.png","ship-3.png","ship-4.png","ship-4.png");
      seaImage=loadImage("sea.png")
}

function setup()
{
      createCanvas(400,400);

      sea=createSprite(200,200,20,20);
      sea.addImage(seaImage);
      sea.velocityX=-3;

      ship=createSprite(100,250,30,30);
      ship.addAnimation("moving",shipImage);
      ship.scale=0.3
  
}

function draw() 
{
      background("blue");
      drawSprites();
}