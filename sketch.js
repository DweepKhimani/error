var PLAY = 1;
var END = 0;
var gameState = PLAY;
var highscore;
var mario, mario_running, mario_jump;
var ground, invisibleGround, groundImage;

var obstaclesGroup, obstacle1, obstacle2;



var gameOver, restart;



function preload(){
  trex_running =   loadAnimation("mario4.png","mario2.png");
  mario_jump = loadImage("mario4.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  mario = createSprite(100,160,10,50);
  
}

function draw() {
  //trex.debug = true;
  background(255);
  /*text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    //ground.velocityX = -(6 + 3*score/100);
  
    if( (touches.length > 0 || keyDown("space")) && trex.y >= 159) {
      trex.velocityY = -12;
      touches = [];
    }

  
    //trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
  
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
    if(score >= highscore){
      highscore = score;
    }
  }*/
  
  
  drawSprites();
}




/*function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}*/
