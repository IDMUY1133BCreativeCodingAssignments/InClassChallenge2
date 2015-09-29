var blobbythings = [];
function setup() {
    createCanvas(1200,800);
    
};

function draw(){
    background(255);
    monster(400,400,1200,300);
    var blobby = {
        x: x+50
    }
    blobbythings.push(blobby);
    for (var x = 10; x <100; x++ ){
        blobbythings[x] = random(0,255);
    }
   for(var b = 0; b < blobbythings.length; b++){
       blobbythings[b] = monster(blobbythings[b]);
   } 
};

function monster(u,v,z,w){
          fill(0,u,v); //green
    //left arm
    beginShape();
    curveVertex(350,700);
    curveVertex(350,700);
    curveVertex(z,600);
    curveVertex(400,620);
    curveVertex(470,620);
    curveVertex(470,620);
    endShape();
    
    //right arm
    beginShape();
    curveVertex(600, 600);
    curveVertex(600, 600);
    curveVertex(720, w);
    curveVertex(700, 750);
    curveVertex(600, 600);
    curveVertex(600, 600);
    endShape();
    
    // body
    beginShape();
    curveVertex(300, 800);
    curveVertex(300, 800);
    curveVertex(330, 550);
    curveVertex(630, 600);
    curveVertex(800, 1200);
    curveVertex(800, 1200);
    endShape();
  
    
   // eye
    noFill();
    beginShape();
    curveVertex(340, 580);
    curveVertex(340, 580);
    curveVertex(340,600);
    curveVertex(410, 600);
    curveVertex(415, 580);
    curveVertex(415, 580);
    endShape();
    
    // right eye
    noFill();
    beginShape();
    curveVertex(500, 580);
    curveVertex(500, 580);
    curveVertex(500,w);
    curveVertex(570, 600);
    curveVertex(575, 580);
    curveVertex(575, 580);
    endShape();
    
    
    // left foot
    fill(200, 60, 200);
    beginShape();
    curveVertex(375, 1200);
    curveVertex(375, 1200);
    curveVertex(400, 800);
    curveVertex(500, 800);
    curveVertex(500, 1200);
    curveVertex(500, 1200);
    
    // right foot
    beginShape();
    curveVertex(475, 1200);
    curveVertex(475, 1200);
    curveVertex(500, 800);
    curveVertex(600, 800);
    curveVertex(600, 1200);
    curveVertex(600, 1200);
    endShape();  
    /*
    //left arm
    beginShape();
    curveVertex(350,700);
    curveVertex(350,700);
    curveVertex(200,600);
    curveVertex(400,620);
    curveVertex(470,620);
    curveVertex(470,620);
    endShape();
    
    //right arm
    beginShape();
    curveVertex(600, 600);
    curveVertex(600, 600);
    curveVertex(720, 750);
    curveVertex(700, 750);
    curveVertex(600, 600);
    curveVertex(600, 600);
    endShape();
    
    // body
    beginShape();
    curveVertex(300, 800);
    curveVertex(300, 800);
    curveVertex(330, 550);
    curveVertex(630, 600);
    curveVertex(800, 1200);
    curveVertex(800, 1200);
    endShape();
  
    
   // eye
    noFill();
    beginShape();
    curveVertex(340, 580);
    curveVertex(340, 580);
    curveVertex(340,600);
    curveVertex(410, 600);
    curveVertex(415, 580);
    curveVertex(415, 580);
    endShape();
    
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
    
    
    // left foot
    fill(200, 60, 200);
    beginShape();
    curveVertex(375, 1200);
    curveVertex(375, 1200);
    curveVertex(400, 800);
    curveVertex(500, 800);
    curveVertex(500, 1200);
    curveVertex(500, 1200);
    
    // right foot
    beginShape();
    curveVertex(475, 1200);
    curveVertex(475, 1200);
    curveVertex(500, 800);
    curveVertex(600, 800);
    curveVertex(600, 1200);
    curveVertex(600, 1200);
    endShape();  
    */
}