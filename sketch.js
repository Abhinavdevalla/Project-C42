var bg;
var iss,issImage,spaceCraft;
var hasDocked = false;

function preload(){
 bg = loadImage("spacebg.jpg")
 issImage = loadImage("iss.png");
 spaceCraftNotMovingAnimation = loadAnimation("spacecraft1.png")
 spaceCraftWithBothJetsFiredAnimation = loadAnimation("spacecraft2.png")
 spaceCraftWithLeftJetFiredAnimation = loadAnimation("spacecraft3.png");
 spaceCraftWithRightJetFiredAnimation = loadAnimation("spacecraft4.png");
}

function setup() {
  createCanvas(800,500);
  // createSprite(400, 200, 50, 50);

  spaceCraft = createSprite(340,340);
  spaceCraft.addAnimation("spaceCraftNotMovingAnimation",spaceCraftNotMovingAnimation);
  spaceCraft.addAnimation("spaceCraftWithBothJetsFiredAnimation",spaceCraftWithBothJetsFiredAnimation);
  spaceCraft.addAnimation("spaceCraftWithLeftJetFiredAnimation",spaceCraftWithLeftJetFiredAnimation);
  spaceCraft.addAnimation("spaceCraftWithRightJetFiredAnimation",spaceCraftWithRightJetFiredAnimation)
  spaceCraft.scale = 0.3

  iss = createSprite(360,180)
  iss.addImage("iss",issImage);
  iss.scale = 0.7;

  
}

function draw() {
  background(bg); 
  if(!hasDocked){
    

    if(keyDown(LEFT_ARROW)){
      spaceCraft.changeAnimation("spaceCraftWithLeftJetFiredAnimation",spaceCraftWithLeftJetFiredAnimation)
      spaceCraft.x = spaceCraft.x - 10;

    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.changeAnimation("spaceCraftWithRightJetFiredAnimation",spaceCraftWithRightJetFiredAnimation)
      spaceCraft.x = spaceCraft.x + 10;
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.changeAnimation("spaceCraftWithBothJetsFiredAnimation",spaceCraftWithBothJetsFiredAnimation)
      spaceCraft.y = spaceCraft.y + 10;
    }
    if(keyDown(UP_ARROW)){
      spaceCraft.changeAnimation("spaceCraftWithBothJetsFiredAnimation",spaceCraftWithBothJetsFiredAnimation);
      spaceCraft.y = spaceCraft.y - 10;
    }

    if(spaceCraft.position.y === 290 && spaceCraft.position.x === 310){
      var hasDocked = true; 
      textSize(30);
      fill("white")
      text("Docking Successful!",250,450);
    }

    console.log(spaceCraft.x)
  } 
drawSprites();  
}