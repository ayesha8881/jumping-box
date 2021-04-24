var canvas;
var music;
var b1,b2,b3,b4
var ball
var edge
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1=createSprite(0,580,360,30)
    b1.shapeColor="orange"
    b2=createSprite(295,580,295,30)
    b2.shapeColor="pink"
    b3=createSprite(515,580,200,30)
    b3.shapeColor="green"
    b4=createSprite(740,580,220,30)
    b4.shapeColor="red"


    //create box sprite and give velocity
    ball=createSprite(random(20,700),100,40,40)
    ball.shapeColor="white"
    ball.velocityX=5
    ball.velocityY=9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edge=createEdgeSprites()
      ball.bounceOff(edge)

    //add condition to check if box touching surface and make it box
    if(b1.isTouching(ball)&& ball.bounceOff(b1)){
        ball.shapeColor="orange"
        music.play()
        
    }

    if(b2.isTouching(ball)){
        ball.shapeColor="pink"
        ball.velocityX=0
        ball.velocityY=0
        music.stop()
    }
    if(b3.isTouching(ball)&& ball.bounceOff(b3)){
        ball.shapeColor="green"
       
    }

    if(b4.isTouching(ball)&& ball.bounceOff(b4)){
        ball.shapeColor="green"
       
    }
    drawSprites()
}
