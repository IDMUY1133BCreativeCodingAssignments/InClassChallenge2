var red;
var green;
var blue;
red=color(255,0,0);
green=color(0,255,0);
blue=color(0,0,255);
var skincolors=[red,green,blue];


var skin;

function setup() {
  createCanvas(1200, 800);
    
}

function draw() {  
  background(255);
    skin=skincolors[0];
  
    leftarm(skin);
    rightarm(skin);
    body(skin);
    eye();
    righteye();
    feet();
}
function leftarm(c){
    fill(c); // green
    beginShape();
    curveVertex(350,700);
    curveVertex(350,700);
    curveVertex(200,600);
    curveVertex(400,620);
    curveVertex(470,620);
    curveVertex(470,620);
    endShape();
}
    
function rightarm(c){
    fill(c); // green
    beginShape();
    curveVertex(600, 600);
    curveVertex(600, 600);
    curveVertex(720, 750);
    curveVertex(700, 750);
    curveVertex(600, 600);
    curveVertex(600, 600);
    endShape();
 }
function body(c){
    fill(c); // green
    beginShape();
    curveVertex(300, 800);
    curveVertex(300, 800);
    curveVertex(330, 550);
    curveVertex(630, 600);
    curveVertex(800, 1200);
    curveVertex(800, 1200);
    endShape();
}
  
    
function eye(){
    noFill();
    beginShape();
    curveVertex(340, 580);
    curveVertex(340, 580);
    curveVertex(340,600);
    curveVertex(410, 600);
    curveVertex(415, 580);
    curveVertex(415, 580);
    endShape();
}
function righteye(){
    
    // right eye
    noFill();
    beginShape();
    curveVertex(500, 580);
    curveVertex(500, 580);
    curveVertex(500,600);
    curveVertex(570, 600);
    curveVertex(575, 580);
    curveVertex(575, 580);
    endShape();
}
    
function feet(){
    // left foot
    fill(200, 60, 200);
    beginShape();
    curveVertex(375, 1200);
    curveVertex(375, 1200);
    curveVertex(400, 800);
    curveVertex(500, 800);
    curveVertex(500, 1200);
    curveVertex(500, 1200);
    endShape();
    
    // right foot
    beginShape();
    curveVertex(475, 1200);
    curveVertex(475, 1200);
    curveVertex(500, 800);
    curveVertex(600, 800);
    curveVertex(600, 1200);
    curveVertex(600, 1200);
    endShape();
}
