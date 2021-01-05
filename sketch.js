var gamestate=0;
var startbg,bg;
var Mario, marioimg, runningmarioimg;
var ground,ground2,ground3,ground4,eground,eground2,eground3,eground4;
var pipimg;



function preload(){
startbg = loadImage("Images/welcome.png");
bg =loadImage("Images/background.png");
marioimg = loadAnimation("Images/frame_0.png");
runningmarioimg = loadAnimation("Images/frame_0.png","Images/frame_1.png","Images/frame_2.png");
pipimg = loadImage("Images/Mario_pipe.png");
}

function setup(){
    createCanvas(windowWidth-20, windowHeight-25);
    Mario = createSprite(0,500,20,20);
    Mario.visible = false;
    ground = createSprite(642.5,height-60,1285,20);
    ground.visible = false;
    ground2 = createSprite(1650,height-60,560,20);
    ground2.visible = false;
    ground3 = createSprite(3265,height-60,2430,20);
    ground3.visible = false;
    ground4 = createSprite(5775,height-60,2370,20);
    ground4.visible = false;
    eground = createSprite(642.5,height-70,1285,20);
    eground.visible = false;
    eground2 = createSprite(1650,height-70,560,20);
    eground2.visible = false;
    eground3 = createSprite(3265,height-70,2430,20);
    eground3.visible = false;
    eground4 = createSprite(5775,height-70,2370,20);
    eground4.visible = false;
    Mario.addAnimation("Mario",marioimg);
    Mario.addAnimation("running mario",runningmarioimg);

    
}
function draw(){
    if(gamestate === 0){
        imageMode(CENTER);
        background("Black");
      image(startbg, width/2, height/2-100, 500, 300);
      fill("White");
      textSize(40);
      textFont("Algebrian");
      text("To Start the Game ", width/2-150, (3/4)*height);
      text("Press (Space Key) ", width/2-150, (3/4)*height+50);


      if(keyDown("space")){
          gamestate = 1;
      }
    }

    if(gamestate == 1){
     background("Red");
     imageMode(CENTER);
     image(bg, width*2, height/2, width*6, height);
    // Pipe(200);
    
     Mario.scale = 0.2;
     Mario.visible = true;
     
     camera.position.x = Mario.x;
     camera.position.y = height/2;

    

     if(keyDown("UP_ARROW")&&(Mario.isTouching(eground)||Mario.isTouching(eground2)||
     Mario.isTouching(eground3)||Mario.isTouching(eground4))){

         Mario.velocityY = -15;
     }
     Mario.velocityY = Mario.velocityY+0.5;
     Mario.collide(ground);
     Mario.collide(ground2);
     Mario.collide(ground3);
     Mario.collide(ground4);



    
    if(keyWentDown("RIGHT_ARROW")||keyWentDown("D")){
        Mario.velocityX = 8;
        Mario.changeAnimation("running mario",runningmarioimg);
    }
    if(keyWentUp("RIGHT_ARROW")||keyWentUp("D")){
        Mario.velocityX = 0;
        Mario.changeAnimation("Mario",marioimg);

    }    console.log(Mario.x);
    

    drawSprites();
}
}
/*function Pipe(x){
var pipe = createSprite(x,500,20,21);
pipe.addImage(pipimg);
pipe.scale = 0.3;
}*/