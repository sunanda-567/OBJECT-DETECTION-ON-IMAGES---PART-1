img="";

function preload()
{
img= loadImage('bedroom.jpg');
}

function setup()
{
canvas=createCanvas(600, 500);
canvas.center();
}

function draw()
{
image(img, 0, 0, 600, 500);
fill("#941e49");
text("BED", 70, 60);
noFill();
strokeWeight(2);
stroke("#941e49");
rect(70, 40, 250, 450);
}