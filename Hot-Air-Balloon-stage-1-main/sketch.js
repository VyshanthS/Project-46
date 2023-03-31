var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsbottom1, obsbottom2, obsbottom3


function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsTop1 = loadImage("./assets/obsTop1.png")
obsTop2 = loadImage("./assets/obsTop2.png")
obsbottom1 = loadImage("./assets/obsbottom1.png")
obsbottom2 = loadImage("./assets/obsbottom2.png")
obsbottom3 = loadImage("./assets/obsbottom3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.8;

           spawnObstaclesTop()
   
        drawSprites();
        
}

function spawnObstaclesTop () {
  if (frameCount % 60   === 0 ) {
    obstacleTop = createSprite(400,50,40,50)
    obstacleTop.velocityX = -4 
    obstacleTop.scale = 0.1
    obstacleTop.y =  Math.round(random(10,100))
  }
  

}