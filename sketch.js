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

    //Jerry
      jerry = createSprite(200,200,20,20);
      jerry.addAnimation("JERRYCHEESE", jerryCheeseIMG);
      jerry.scale = 1;
}


function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
