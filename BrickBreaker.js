let ball_x,ball_y, ball_dy;

function setup() {
  createCanvas(400, 400);
  paddle_x = width/2;
  paddle_y = width-20;
  ball_x = width/2;
  ball_y = height/2;
  radius = 15;
  ball_dy = 3;
  ball_dx = 3;
}

function draw() {
  background("grey");
  circle(ball_x,ball_y,radius*2);
  rect(paddle_x,paddle_y,80,20);
  textSize(20);
  text("Score", 20, 40);
  text("Lives",300,40);
  ball_y = ball_y + ball_dy;
  ball_x = ball_x + ball_dx;
  
  if(ball_y+radius>=height){
    ball_dy = -ball_dy
  }
  
  if(ball_y-radius<=0){
    ball_dy = -ball_dy
  }
  
  if(ball_x+radius>=400){
    ball_dx = -ball_dx
  }
  
    if(ball_x-radius<=0){
    ball_dx = -ball_dx
  }
  
    if (keyIsDown(LEFT_ARROW) && paddle_x >= 0)  {
    paddle_x = paddle_x - 2;
  }
  if (keyIsDown(RIGHT_ARROW) && paddle_x <= width - 72)  {
    paddle_x = paddle_x + 2;
  }
  
  
}