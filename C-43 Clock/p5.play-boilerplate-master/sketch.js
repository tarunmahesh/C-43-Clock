var Hour, Minute, Second;
var hourAngle, minuteAngle, secondAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
  
}

function draw() {
  background("gray");

  Hour = hour()%12
  Minute = minute()
  Second = second()

  hourAngle = map(Hour,0,12,0,360) - 90
  minuteAngle = map(Minute,0,60,0,360) - 90
  secondAngle = map(Second,0,60,0,360) - 90

  fill("black")
  ellipse(400,200,250)

  stroke(0,0,255)
  strokeWeight(13)
  line(400,200,400+100*Math.cos(hourAngle*PI/180),200+100*Math.sin(hourAngle*PI/180))

  stroke(0,255,0)
  strokeWeight(10)
  line(400,200,400+100*Math.cos(minuteAngle*PI/180),200+100*Math.sin(minuteAngle*PI/180))

  stroke(255,0,0)
  strokeWeight(7)
  line(400,200,400+100*Math.cos(secondAngle*PI/180),200+100*Math.sin(secondAngle*PI/180))



  drawSprites();
}