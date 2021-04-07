//Declare Variable
  var garden, gardenIMG;
  var tom, tomSitIMG, tomStandIMG, tomWalkIMG;
  var jerry, jerryCheeseIMG, jerryMagnifyIMG, jerryTeaseIMG;


function preload() 
{
  //Load Animations And Images
    gardenIMG = loadImage("garden.png");

    tomSitIMG = loadAnimation("cat1.png");
    tomStandIMG = loadAnimation("cat4.png");
    tomWalkIMG = loadAnimation("cat2.png", "cat3.png");

    jerryCheeseIMG = loadAnimation("mouse1.png")
    jerryMagnifyIMG = loadAnimation("mouse4.png");
    jerryTeaseIMG = loadAnimation("mouse2.png", "mouse3.png");
}


function setup()
{
    //Canvas
      createCanvas(800,800);
      
    //Garden
      garden = createSprite(400,400,20,20);
      garden.addImage("GARDEN",gardenIMG);
      garden.scale = 1;
    
    //Tom
      tom = createSprite(500,500,20,20);
      tom.addAnimation("TOMSIT", tomSitIMG);
      tom.scale = 1;
      tom.debug = true;

    //Jerry
      jerry = createSprite(200,200,20,20);
      jerry.addAnimation("JERRYCHEESE", jerryCheeseIMG);
      jerry.scale = 1;
      jerry.debug = true;
}


function draw() 
{
  //Background
    background(255);
    
  //Tease and Chase
      keyPressed();

  //Tom and Jerry Collide
    if(tom.x-jerry.x < tom.width/2+jerry.width/2 && jerry.x-tom.x < jerry.width/2+tom.width/2 && tom.y-jerry.y < tom.width/2+jerry.width/2 && jerry.y-tom.y < jerry.width/2+tom.width/2)
      {
        tom.changeAnimation("TOMSTAND", tomStandIMG);
        jerry.changeAnimation("JERRYMAGNIFY", jerryMagnifyIMG);

  //Draw Sprites
    drawSprites();
}


function keyPressed()
{
  if(keyPressed(LEFT_ARROW))
   {
      //Animation
        //Jerry
          jerry.changeAnimation("JERRYTEASE", jerryTeaseIMG);
          jerry.frameDelay = 25;
    
       //Tom
         tom.changeAnimation("TOMWALK", tomWalkIMG);
         tom.frameDelay = 25;

      //Tom Movement
       tom.x = tom.x - 10;
   }
  else
   {
      //Animation
        //Jerry
          jerry.changeAnimation("JERRYCHEESE", jerryCheeseIMG);

        //Tom
          tom.changeAnimation("TOMSIT", tomSitIMG);
   }
  
  }
}
