var circleOne={
	x:50,
	y:100,
	d:200,

function setup() {
  // put setup code here
  createCanvas(640,480);
  background(250, 0, 250);

}

function draw() {
 // put drawing code here
 //background color//

 fill(122,48,249);
 stroke(123,321,333)
 rect(100,40,200,160);

 fill(32,128,79);
 stroke(123,321,333);
 ellipse(320,240,100,100);
 ellipse(mouseX, mouseY,30);
 console.log(draw);
}

function mousePressed() {
	background(250, 0, 250);
}


