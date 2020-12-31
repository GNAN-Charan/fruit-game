var PLAY = 1;
var END = 0;
var gameState = PLAY;

var knifeImage,fruit1,fruit2,fruit3,fruit4,position;
var alien1,alien2;
var gameOverImage,gameOver,rewindSound;
var knifeGroup,fruitGroup,alien;

var score = 0

function preload()
    {

    knifeImage = loadImage("sword.png");
    knifeSound = loadSound("knifeSwooshSound.mp3")
  
    fruit1 = loadImage("fruit1.png");
    fruit2 = loadImage("fruit2.png");
    fruit3 = loadImage("fruit3.png");
    fruit4 = loadImage("fruit4.png");
    alien1 = loadImage("alien1.png");
    alien2 = loadImage("alien2.png");
  
    gameOverImage = loadImage("gameover.png");
    gameOverSound = loadSound("gameover.mp3");
  
    rewindSound = loadSound("Rewind-sound-effect.mp3")
    }

function setup() 
    {
    createCanvas(500, 500);
  
    knife = createSprite(460,200,20,20)
    knife.scale = 0.7
  
    knifeGroup = createGroup();
    knifeGroup.add(knife);
    fruitGroup = createGroup();
    alienGroup = createGroup();
     
    }

function draw()
    {
  
    background(180);
  
    if(keyDown("space"))
    {
    gameState = PLAY;
    rewindSound.play()
    }
  
    if(knifeGroup.isTouching(fruitGroup))
    {
    fruitGroup.destroyEach();
    score = score+2
    knifeSound.play()
    }
    
    if(knifeGroup.isTouching(alienGroup))
    {
    alienGroup.destroyEach();
    gameState = END;
    gameOverSound.play()
    }

    if(gameState === PLAY){
       
    fruit0()
    alien0()
       
    knife.addImage(knifeImage)
    knife.y = mouseY
    knife.x = mouseX
    }
  
    else if (gameState === END) {
       
    knife.addImage(gameOverImage)
    knife.y=250
    knife.x=250
    }
  
    drawSprites();
    text("score = " + score,400,30)
    }

function fruit0()
    {
  
    if (frameCount % 80 === 0){
   
    var fruit = createSprite(position,Math.round(random(40,460)),500,500);
    fruit.velocityX = -4;
    fruitGroup.add(fruit);
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
    case 1: fruit.addImage(fruit1);
    break;
    case 2: fruit.addImage(fruit2);
    break;
    case 3: fruit.addImage(fruit3);
    break;
    case 4: fruit.addImage(fruit4);
    break;
    default: break;
    }
    fruit.lifetime = 112
    fruit.scale = 0.2
    
    position = Math.round(random(1,2))
    
    if(position == 1)
    {
    fruit.x = 450
    fruit.velocityX = -(7+(score/4))
    }
    else
    {
    if(position ==2)
    {
    fruit.x = 50
    fruit.velocityX =(7+(score/4))
    }
    }
    }
    }

function alien0()
    {
  
    if (frameCount % 200 === 0){
    var alien = createSprite(450,Math.round(random(40,460)),0,400);
    alien.velocityX = -4;
    alienGroup.add(alien);
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
    case 1: alien.addImage(alien1);
    break;
    case 2: alien.addImage(alien2);
    break;
    default: break;
    }
    alien.lifetime = 112
    
    position1 = Math.round(random(1,2))
    
    if(position1 == 1)
    {
    alien.x = 450
    alien.velocityX = -(7+(score/4))
    }
    else
    {
    if(position1 ==2)
    {
    alien.x = 50
    alien.velocityX =(7+(score/4))
    }
    }
    }
    }