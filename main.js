
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(150,150)
    canvas.center();
    video = createCapture(VIDEO);

    video.hide();
}  
function draw(){

    image(video,230,150,220,200);
 
    fill(0,128,0);
    stroke(0,128,0);
    rect(70,130,460,15)
    fill(0,128,0);
    stroke(0,128,0);
    rect(50,140,18,300)
    fill(250,0,0);
    stroke(250,0,0);
    triangle(30, 165, 58,110, 86, 165);
    fill(0,128,0);
    stroke(0,128,0);
    rect(520,140,18,300)
    fill(0,0,255);
    stroke(0,0,255);
    circle(530,140,50);
    fill(0,128,0);
    stroke(0,128,0);
    rect(40,440,460,15)
    fill(0,0,255);
    stroke(0,0,255);
    square(500, 430, 55);
    
    beginShape();
vertex(40, 420);
vertex(60, 420);
vertex(60, 440);
vertex(80,440);
vertex(80, 460);
vertex(40, 460);
endShape(CLOSE);
   

}  

function take_snapshot(){    
  save('myFilterImage.png');
}
