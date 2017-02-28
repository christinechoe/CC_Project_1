//want to make it so the checkerboard is 
//split into 20 x 20 squares

//red dots "drip" from top to bottom
//slow down as they reach the bottom

var x = 0;
var y = 0;
step = 0;

function setup() { 
  createCanvas(400, 400);
  background(255);
} 

function draw() {
  circles(0, 0);
  
  //this isn't working
  //if(MouseIsPressed){ 
	//step += 5;
	//if(step > height)
	//{step = 0 }

}

}
  

    
  function circles(x, y, step){
    noStroke();
    fill(232, 12, 122);
    ellipse(30, 30, 50, 50);
    stroke(71, 12, 122);
    
       

        
 if (mouseX < width/2) {
      fill(255); //whire square
      rect(200, 200,width/2,height);
 if (mouseY < width/2) {
      noStroke();
      fill(97, 255, 255); //cyan square
      rect(-1, -200,width/2, height);
  
  }
}
  else background (0); 
}