var gameState
var link
var wall1
var wall2
var wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12, wall13,wall14,wall15,wall16,wall17
var power1,power2,power3
var demon1,demon2,demon3
 
function setup(){
createCanvas(1000,1000)
gameState=0
link=createSprite(10,10,30,30)
wall1=createSprite(80,10,10,230)
wall2=createSprite(10,180,230,10)
wall3=createSprite(200,120,230,10)
wall4=createSprite(150,10,10,230)
wall5=createSprite(200,10,10,230)
wall6=createSprite(300,180,230,10)
wall7=createSprite(123,290,10,230)
wall8=createSprite(270,403,300,10)
wall9=createSprite(432,403,40,10)
wall10=createSprite(410,290,10,230)
wall11=createSprite(312,10,10,230)
wall12=createSprite(425,120,500,10)
wall13=createSprite(678,261,10,500)
wall14=createSprite(520,650,10,500)       
wall15=createSprite(760,568,490,10)
wall16=createSprite(574,448,100,10)
demon1=createSprite(614,346,30,30)
demon3=createSprite(294,213,30,30)
power2=createSprite(739,740,50,50)
power3=createSprite(228,291,30,30)
power3.shapeColor="green"
power2.shapeColor="black"
demon1.shapeColor="blue"
demon1.velocityX=10
demon3.velocityX=20
demon2=createSprite(815,317,230,10)
demon2.rotation=10
power1=createSprite(74,845,50,50)
power1.shapeColor="red"
link.shapeColor="green"

}

function draw(){
background("yellow")
link.bounceOff(wall1)
link.bounceOff(wall2)
link.bounceOff(wall3)
link.bounceOff(wall4)
link.bounceOff(wall5)
link.bounceOff(wall6)
link.bounceOff(wall7)
link.bounceOff(wall8)
link.bounceOff(wall9)
link.bounceOff(wall10)
link.bounceOff(wall11)
link.bounceOff(wall12)
link.bounceOff(wall13)
link.bounceOff(wall14)
link.bounceOff(wall15)
link.bounceOff(wall16)
demon1.bounceOff(wall13)
demon1.bounceOff(wall10)
demon3.bounceOff(wall10)
demon3.bounceOff(wall7)
demon2.shapeColor="blue"
demon3.shapeColor="blue"
demon2.rotation=demon2.rotation+5
text(mouseX+","+ mouseY,mouseX,mouseY)
if(keyDown(DOWN_ARROW)){
  link.y=link.y+10
}
if(keyDown(UP_ARROW)){
  link.y=link.y-10
}
if(keyDown(LEFT_ARROW)){
  link.x=link.x-10
}
if(keyDown(RIGHT_ARROW)){
  link.x=link.x+10
}
if(link.isTouching(demon1) || link.isTouching(demon2) || link.isTouching(demon3)){
  if(gameState === 0){
    textSize(90)
    text("GAME OVER",162,648)
    demon1.velocityX=0
    demon2.rotation=0
    demon3.velocityX=0
  }else {
    if(link.isTouching(demon1)){
      demon1.destroy()
      gameState=0
    }
    if(link.isTouching(demon2)){
      demon2.destroy()
      gameState=0
    }
    if(link.isTouching(demon3)){
      demon3.destroy()
      gameState=0
    }
  } 
  }
  if(link.isTouching(power1)){
    gameState=1
    power1.destroy() 
  }

  if(link.isTouching(power2)){
    gameState=1
    power2.destroy()
  }
  if(link.isTouching(power3)){
    gameState=1
    power3.destroy()
  }
drawSprites()


}