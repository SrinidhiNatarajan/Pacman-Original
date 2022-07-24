var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,
m11,m12,m13,m14,m15,m16,m17,m19,m20,
m21,m22,m23,m24,m25,m26,m27,m28,m29,m30,
m31,m32,m33,m34,m35,m36,m37,m38,m39,m40,
m41,m42,m43,m44,m45,m46,m47,m48,m49,m50,
m51;

var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20;

var bg;
var win;
var canvas;
var heart1
var heart2
var ghostblue;
var ghostpink;
var ghostred;
var ghostyellow;
var edges;
var heartGroup
var mazeGroup;
var ghostGroup;
var ghostGroupI;
var coinGroup;
var gameState="play"
var GameOver
var reset
var reset1
var star

var score = 0
var lifes = 3

function preload(){

  bg = loadImage("./assets/bg.jpg")
  ghost1 = loadImage("./assets/Gblue_left.png")
  ghost2 = loadImage("./assets/Gred_left.png")
  ghost3 = loadImage("./assets/Gpink_left.png")
  ghost4 = loadImage("./assets/Gyellow_left.png")
  coin1 = loadImage("./assets/coins.png")
  pman = loadImage("./assets/pacman_close.png")
  pmanop = loadImage("./assets/pacman_open.png")
  GameOver = loadImage("./assets/gameOver.png")
  heart = loadImage("./assets/heart.png")
  reset1 = loadImage("./assets/reset.png")
  star = loadImage("./assets/star.png")
  win = loadImage("./assets/win.png")
}

function setup(){
  canvas = createCanvas(800,500)
  mazeGroup = new Group()
  edges = createEdgeSprites()
  coinGroup = new Group()
  ghostGroup = new Group()
  ghostGroupI = new Group()
  heartGroup = new Group()

  heart1 = createSprite(660,423,10,10)
  heart1.addImage(heart)
  heart1.scale = 0.10

  heart2 = createSprite(100,113,10,10)
  heart2.addImage(heart)
  heart2.scale = 0.10

  heartGroup.add(heart1)
  heartGroup.add(heart2)

  pacman = createSprite(74,443,10,10)
  pacman.addImage(pman)
  pacman.scale = 0.13

  star1 = createSprite(770,25,50,50)
  star1.addImage(star)
  star1.scale = 0.025

  m1 = createSprite(31,242,10,400)
  m1.shapeColor = "white"

  m2 = createSprite(328,39,600,10)
  m2.shapeColor = "white"

  m3 = createSprite(470,445,600,10)
  m3.shapeColor = "white"

  m4 = createSprite(770,250,10,400)
  m4.shapeColor = "white"

  m5 = createSprite(156,325,80,10)
  m5.shapeColor = "white"
  
  m6 = createSprite(200,345,10,50)
  m6.shapeColor = "white"

  m7 = createSprite(160,368,90,10)
  m7.shapeColor = "white"

  m8 = createSprite(90,241,110,10)
  m8.shapeColor = "white"

  m9 = createSprite(76,90,100,10)
  m9.shapeColor = "white"

  m10 = createSprite(126,110,10,52)
  m10.shapeColor = "white"

  m11 = createSprite(145,139,50,10)
  m11.shapeColor = "white"

  m12 = createSprite(164,160,10,50)
  m12.shapeColor = "white"

  m13 = createSprite(290,69,10,70)
  m13.shapeColor = "white"

  m14 = createSprite(310,105,50,10)
  m14.shapeColor = "white"

  m15 = createSprite(339,135,10,70)
  m15.shapeColor = "white"

  m16 = createSprite(217,110,10,50)
  m16.shapeColor = "white"

  m17 = createSprite(236,137,50,10)
  m17.shapeColor = "white"

  m18 = createSprite(266,182,10,100)
  m18.shapeColor = "white"
  
  m19 = createSprite(320,226,100,10)
  m19.shapeColor = "white"

  m20 = createSprite(264,358,10,80)
  m20.shapeColor = "white"

  m21 = createSprite(481,80,10,80)
  m21.shapeColor = "white"

  m22 = createSprite(544,415,10,50)
  m22.shapeColor = "white"

  m23 = createSprite(504,390,90,10)
  m23.shapeColor = "white"

  m24 = createSprite(690,399,10,80)
  m24.shapeColor = "white"

  m25 = createSprite(725,271,80,10)
  m25.shapeColor = "white"

  m26 = createSprite(490,120,100,10)
  m26.shapeColor = "white"

  m27 = createSprite(375,225,10,80)
  m27.shapeColor = "white"

  m28 = createSprite(490,236,80,10)
  m28.shapeColor = "white"

  m29 = createSprite(446,233,10,80)
  m29.shapeColor = "white"

  m30 = createSprite(344,358,10,80)
  m30.shapeColor = "white"

  m31 = createSprite(365,315,50,10)
  m31.shapeColor = "white"

  m32 = createSprite(389,335,10,50)
  m32.shapeColor = "white"

  m33 = createSprite(728,116,80,10)
  m33.shapeColor = "white"

  m34 = createSprite(689,152,10,80)
  m34.shapeColor = "white"

  m35 = createSprite(669,189,50,10)
  m35.shapeColor = "white"

  m36 = createSprite(590,345,10,210)
  m36.shapeColor = "white"

  m37 = createSprite(555,236,80,10)
  m37.shapeColor = "white"

  m38 = createSprite(300,393,80,10)
  m38.shapeColor = "white"

  m39 = createSprite(208,253,10,50)
  m39.shapeColor = "white"

  m40 = createSprite(208,231,50,10)
  m40.shapeColor = "white"

  m41 = createSprite(305,417,10,50)
  m41.shapeColor = "white"

  m42 = createSprite(232,325,60,10)
  m42.shapeColor = "white"

  m43 = createSprite(495,155,80,10)
  m43.shapeColor = "white"

  m44 = createSprite(535,160,10,70)
  m44.shapeColor = "white"

  m45 = createSprite(584,79,10,90)
  m45.shapeColor = "white"

  m46 = createSprite(649,145,10,80)
  m46.shapeColor = "white"

  m47 = createSprite(630,313,80,10)
  m47.shapeColor = "white"

  m48 = createSprite(254,90,80,10)
  m48.shapeColor = "white"

  m49 = createSprite(508,302,80,10)
  m49.shapeColor = "white"

  m50 = createSprite(214,445,200,10)
  m50.shapeColor = "white"

  m51 = createSprite(665,39,90,10)
  m51.shapeColor = "white"

  mazeGroup.add(m1)
  mazeGroup.add(m2)
  mazeGroup.add(m3)
  mazeGroup.add(m4)
  mazeGroup.add(m5)
  mazeGroup.add(m6)
  mazeGroup.add(m7)
  mazeGroup.add(m8)
  mazeGroup.add(m9)
  mazeGroup.add(m10)
  mazeGroup.add(m11)
  mazeGroup.add(m12)
  mazeGroup.add(m13)
  mazeGroup.add(m14)
  mazeGroup.add(m15)
  mazeGroup.add(m16)
  mazeGroup.add(m17)
  mazeGroup.add(m16)
  mazeGroup.add(m17)
  mazeGroup.add(m18)
  mazeGroup.add(m19)
  mazeGroup.add(m20)
  mazeGroup.add(m21)
  mazeGroup.add(m22)
  mazeGroup.add(m23)
  mazeGroup.add(m24)
  mazeGroup.add(m25)
  mazeGroup.add(m26)
  mazeGroup.add(m27)
  mazeGroup.add(m28)
  mazeGroup.add(m29)
  mazeGroup.add(m30)
  mazeGroup.add(m31)
  mazeGroup.add(m32)
  mazeGroup.add(m34)
  mazeGroup.add(m35)
  mazeGroup.add(m36)
  mazeGroup.add(m37)
  mazeGroup.add(m38)
  mazeGroup.add(m39)
  mazeGroup.add(m40)
  mazeGroup.add(m41)
  mazeGroup.add(m42)
  mazeGroup.add(m43)
  mazeGroup.add(m44)
  mazeGroup.add(m45)
  mazeGroup.add(m46)
  mazeGroup.add(m47)
  mazeGroup.add(m48)
  mazeGroup.add(m49)
  mazeGroup.add(m50)
  mazeGroup.add(m51)

  ghostblue = createSprite(200,300,25,25)
  ghostblue.addImage(ghost1)
  ghostblue.scale = 0.25
  ghostblue.velocityY = -2
  ghostblue.velocityX = 2
  ghostblue.velocityY = 2
  ghostblue.velocityX = -2

  ghostred = createSprite(200,100,25,25)
  ghostred.addImage(ghost2)
  ghostred.scale = 0.25
  ghostred.velocityY = -2
  ghostred.velocityX = 2
  ghostred.velocityY = 2
  ghostred.velocityX = -2

  ghostpink = createSprite(500,100,25,25)
  ghostpink.addImage(ghost3)
  ghostpink.scale = 0.25
  ghostpink.velocityY = -2
  ghostpink.velocityX = 2
  ghostpink.velocityY = 2
  ghostpink.velocityX = -2

  ghostyellow = createSprite(750,100,25,25)
  ghostyellow.addImage(ghost4)
  ghostyellow.scale = 0.25
  ghostyellow.velocityY = -2
  ghostyellow.velocityX = 2
  ghostyellow.velocityY = 2
  ghostyellow.velocityX = -2
  
  ghostblue1 = createSprite(210,300,25,25)
  ghostblue1.addImage(ghost1)
  ghostblue1.scale = 0.25
  ghostblue1.velocityY = -3
  ghostblue1.velocityX = 3
  ghostblue1.velocityY = 3
  ghostblue1.velocityX = -3

  ghostred1 = createSprite(210,100,25,25)
  ghostred1.addImage(ghost2)
  ghostred1.scale = 0.25
  ghostred1.velocityY = -3
  ghostred1.velocityX = 3
  ghostred1.velocityY = 3
  ghostred1.velocityX = -3

  ghostpink1 = createSprite(510,100,25,25)
  ghostpink1.addImage(ghost3)
  ghostpink1.scale = 0.25
  ghostpink1.velocityY = -3
  ghostpink1.velocityX = 2
  ghostpink1.velocityY = 3
  ghostpink1.velocityX = -2

  ghostyellow1 = createSprite(760,100,25,25)
  ghostyellow1.addImage(ghost4)
  ghostyellow1.scale = 0.25
  ghostyellow1.velocityY = -3
  ghostyellow1.velocityX = 2
  ghostyellow1.velocityY = 3
  ghostyellow1.velocityX = -2
  
  ghostGroup.add(ghostblue)
  ghostGroup.add(ghostred)
  ghostGroup.add(ghostpink)
  ghostGroup.add(ghostyellow)
  ghostGroup.add(ghostblue1)
  ghostGroup.add(ghostred1)
  ghostGroup.add(ghostpink1)
  ghostGroup.add(ghostyellow1)

c1 = createSprite(302,367,10,10)
c1.addImage(coin1)
c1.scale = 0.06

c2 = createSprite(208,215,10,10)
c2.addImage(coin1)
c2.scale = 0.06

c3 = createSprite(51,113,10,10)
c3.addImage(coin1)
c3.scale = 0.06

c4 = createSprite(231,348,10,10)
c4.addImage(coin1)
c4.scale = 0.06

c5 = createSprite(500,57,10,10)
c5.addImage(coin1)
c5.scale = 0.06

c6 = createSprite(208,215,10,10)
c6.addImage(coin1)
c6.scale = 0.06

c7 = createSprite(55,65,10,10)
c7.addImage(coin1)
c7.scale = 0.06

c8 = createSprite(730,143,10,10)
c8.addImage(coin1)
c8.scale = 0.06

c9 = createSprite(727,425,10,10)
c9.addImage(coin1)
c9.scale = 0.06

c10 = createSprite(742,86,10,10)
c10.addImage(coin1)
c10.scale = 0.06

c11 = createSprite(330,425,10,10)
c11.addImage(coin1)
c11.scale = 0.06

c12 = createSprite(264,65,10,10)
c12.addImage(coin1)
c12.scale = 0.06

c13 = createSprite(615,424,10,10)
c13.addImage(coin1)
c13.scale = 0.06

c14 = createSprite(512,424,10,10)
c14.addImage(coin1)
c14.scale = 0.06

c15 = createSprite(561,59,10,10)
c15.addImage(coin1)
c15.scale = 0.06

c16 = createSprite(564,260,10,10)
c16.addImage(coin1)
c16.scale = 0.06

c17 = createSprite(604,61,10,10)
c17.addImage(coin1)
c17.scale = 0.06

c18 = createSprite(310,65,10,10)
c18.addImage(coin1)
c18.scale = 0.06

c19 = createSprite(750,295,10,10)
c19.addImage(coin1)
c19.scale = 0.06

c20 = createSprite(566,424,10,10)
c20.addImage(coin1)
c20.scale = 0.06

coinGroup.add(c1)
coinGroup.add(c2)
coinGroup.add(c3)
coinGroup.add(c4)
coinGroup.add(c5)
coinGroup.add(c6)
coinGroup.add(c7)
coinGroup.add(c8)
coinGroup.add(c9)
coinGroup.add(c10)
coinGroup.add(c11)
coinGroup.add(c12)
coinGroup.add(c13)
coinGroup.add(c14)
coinGroup.add(c15)
coinGroup.add(c16)
coinGroup.add(c17)
coinGroup.add(c18)
coinGroup.add(c19)
coinGroup.add(c20)
}

function draw(){
background(bg)
console.log(mouseX,mouseY)
textSize(30)
fill("white")
text("Score:"+score,22,25)

textSize(30)
fill("white")
text("Lives:"+lifes,535,25)

if(gameState=="play"){
ghostblue.bounceOff(mazeGroup)
ghostred.bounceOff(mazeGroup)
ghostpink.bounceOff(mazeGroup)
ghostyellow.bounceOff(mazeGroup)

ghostblue.bounceOff(edges)
ghostred.bounceOff(edges)
ghostpink.bounceOff(edges)
ghostyellow.bounceOff(edges)

ghostblue1.bounceOff(mazeGroup)
ghostred1.bounceOff(mazeGroup)
ghostpink1.bounceOff(mazeGroup)
ghostyellow1.bounceOff(mazeGroup)

ghostblue1.bounceOff(edges)
ghostred1.bounceOff(edges)
ghostpink1.bounceOff(edges)
ghostyellow1.bounceOff(edges)


if(keyDown(UP_ARROW)){  
  pacman.y = pacman.y -5
}

if(keyDown(DOWN_ARROW)){
  pacman.y = pacman.y +5
}

if(keyDown(LEFT_ARROW)){
  pacman.x = pacman.x -8
}

if(keyDown(RIGHT_ARROW)){
  pacman.x = pacman.x +8
}

if(pacman.isTouching(heartGroup))
{
  for(var i=0;i<heartGroup.length;i++){ 
    lifes = lifes+1
      heartGroup[i].destroy()
      console.log(lifes)
  }
  }

if(coinGroup.isTouching(pacman))
{
  for(var i=0;i<coinGroup.length;i++){ 
    if(coinGroup[i].isTouching(pacman)){ 
      coinGroup[i].destroy()
      score =score+5
      console.log(score)
    } 
  } 
}

if(lifes>0){
if(ghostGroup.isTouching(pacman))
{
  console.log("working")
  for(var i=0;i<ghostGroup.length;i++){ 
    
    if(ghostGroup[i].isTouching(pacman)){ 
      lifes = lifes-1
      ghostGroup[i].destroy()
      console.log(lifes)
    }
  }
  } 
}

pacman.collide(mazeGroup);
drawSprites()

if(pacman.isTouching(star1)){
  gameState="end"
  image(win,1,1,800,500)
  image(reset1,330,200,100,100)
}

if(lifes==0){
 gameState="end"
}
}
if(gameState=="end"){
  image(GameOver,1,1,800,500)
  image(reset1,330,200,100,100)
}
}

function reset(){
  gameState = "play";
  GameOver.visible = false;
  restart.visible = false;  
  score = 0;
  lives = 0;
}