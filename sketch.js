let snake;
let rez=2;
let food;
let w;
let h;
var gameState = 0;
var score=0;

function preload(){
  mouse_img = loadImage("mouse2-edited.png");
}
function setup() {
  createCanvas(400, 400);
  frameRate(30);
  snake = new Snake();
  w=floor(width/rez);
  h=floor(height/rez);
  foodLocation();
}

function foodLocation(){
  let x = floor(random(w))
  let y = floor(random(h))
  food = createVector(x,y)
}

function draw() {
  scale(rez);
  
  if(gameState ===0){
    background(120,30,60);
    var title=createElement("h1");
    title.position(670,60);
    title.html("Snake Game")
    textSize(10);
    fill("white")
    text("Score:"+score, 160,20);
    if(snake.eat(food)){
      console.log("hello")
      foodLocation();
    }
    snake.update();
    snake.show();

    if(snake.end()){
      
      gameState =1;
    }
    noStroke();
    fill(255,0,0);
    //rect(food.x, food.y,10,10)
    image(mouse_img,food.x, food.y, 30,20);
  }
  else if(gameState===1){
    console.log("Game End");
    //background("red");
    stroke("green")
    strokeWeight(3);
    fill("yellow")
    text("Game End", 70,100)
    /*var title = createElement("h3");
    title.position(20,20)
    title.html("Game End")*/
  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}