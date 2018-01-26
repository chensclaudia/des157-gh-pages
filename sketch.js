function setup() {

  var myCanvas = createCanvas(640, 480);
  myCanvas.parent('processing');
  background('#ABDDE1');
}

function draw() {

  //ellipse(100, 100, 80, 80);
  if(mouseIsPressed)
  {
    fill(0);
  }
  else
  {
    fill(255);

  }
  triangle(mouseX, mouseY, 80, 80);
}
/*
class Particle //Establishing Particle object
{
  float x = width/2;
  float y = height/2;
  float xv = -3+random(6);
  float yv = -random(4);
  float maxYV = 20;
  float gravity = 0.1;
  float friction = 1;
  float radius = 14;
  color c = color(random(255),random(255),random(255),80);

  Particle(){
  }

  Particle(float xp,float yp)
  {
    x = xp;
    y = yp;
  }

  Particle(float xp,float yp,float xvel,float yvel)
  {
    this(xp, yp);
    xv = xvel;
    yv = yvel;
  }

 public void update() //Let's the balloon move through the canvas.
  {
    if((yv < maxYV))
    {
      yv -= gravity*.2;
    }
    yv *= friction;
    y += yv;
    x += xv;

 If you want the balloons to stop at the ceiling, uncomment this.
    if(y <= 0+radius){
      xv = 0;
      yv = 0;
      y = 0 + radius;






    }
*/
