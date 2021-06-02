var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  rotate(-90)

  translate(200,200)

  hr = hour()
  mn = minute()
  sc = second()

  hrAngle = map(hr%12,0,12,0,360)
  mnAngle = map(mn,0,60,0,360)
  scAngle = map(sc,0,60,0,360)

  push()
  stroke("red")
  strokeWeight (7)
  rotate(scAngle)
  line(0,0,100,0)
  pop()

  push()
  stroke("blue")
  strokeWeight (7)
  rotate(mnAngle)
  line (0,0,75,0)
  pop()

  push()
  stroke("green")
  strokeWeight (7)
  rotate(hrAngle)
  line (0,0,50,0)
  pop()

  point (0,0)

  stroke("red")
  arc(0,0,300,300,0,scAngle)

  stroke("blue")
  arc(0,0,280,280,0,mnAngle)

  stroke("green")
  arc(0,0,200,200,0,hrAngle)



  drawSprites();
}