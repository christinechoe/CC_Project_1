//edited to move triangles/arcs

function setup() { 
createCanvas(2600,800);
limegreen = color(88, 255, 98);
purple = color(207, 39, 252);
mintgreen = color(96, 219, 192); 
} 

function draw() { 
background(252, 199, 199); // pink
stroke(244, 110, 110); // color of the line red
	
//last monster
	circles(1700, 0, 0, -60);
	boxes(1700, -90, -5, 80, limegreen);
	foreheadlines(1700, 400); 
	objectspikes(1700, -20, 10, 10);  
  triangles(2130, -40, 2176, -40, 2160, -40);

	
//middle monster
	circles(800, 0, -40, -10);
	boxes(770, -40, 60, 60, purple);
	foreheadlines(800, 200);
	objectspikes(800, 50, 10, 10, purple);	   
	triangles(820, -14, 870, -14, 850, -14);	
  
//original monster
	circles(0, 0, 0 ,0);
	boxes(0, 0 ,0, 0, mintgreen);
	foreheadlines (0, 0);
	objectspikes(0, 0, 0 ,0 ,0, 0, 0);
	triangles(0, 0, 0, 0, 0, 0);
	
}

function boxes (x, y, w, h, f) {
	
	fill(f);
	strokeWeight(20); // thickness of the line
	
	//ears
  rect(100 + x, 350 + y, 100 + w, 100 + h); // square
  rect(600 + x, 350 + y, 100 + w, 100 + h); // square
	
	//mouth
  fill(218, 244, 88);
  rect(350 + x, 450 + y, 100 + w, 100 + h); // square
	
  //body
  fill(96, 219, 192);
  rect(250 + x, 620 + y, 300 + w, 200 + h); // square 
  
  //arms
  fill(205, 174, 252, 50); //purple
  rect(550 + x, 720 + y, 100 + w, 100 + h);
	rect(150 + x, 720 + y, 100 + w, 100 + h);
   
  
} 
	
function circles(x, y, w, h) {
	
	
	ellipseMode(CENTER);
  //face
  fill(255, 255, 255);
  ellipse(400 + x, 400 + y, 400 + w, 400 + h); // circle
  
  //dot on face
  fill(96, 219, 192); //green
  ellipse(400 + x, 400 + y, 200 + w, 200 + h); //dot
  strokeWeight(50);
    
  //eyes
  fill(5, 5, 5); //black
  strokeWeight(10); // thickness of the line
  ellipse(300 + x, 340 + y, 80 + w, 80 + h);
  ellipse(500 + x, 340 + y, 80 + w, 80 + h);
  
  //dots on eyes
  fill(96, 219, 192); //green
  point(300 + x, 340 + y); //dot
  point(500 + x, 340 + y); //dot
	
	  
  //shoulders
	strokeWeight(20); // thickness of the line
  fill(140, 185, 247, 300);
  ellipse(150 + x, 650 + y, 200 + w, 100 + h);
  ellipse(650 + x, 650 + y, 200 + w, 100 + h);
	
	//extra circle
 ellipse(650 + x, 240 + y, 250 + w, 100 + h);
	
}
	
	
	function foreheadlines (x, y) {
	
//forehead
  strokeWeight(40); // thickness of the line
  line(400 + x, 100 + y, 400 + x, 300 + y);
  line(200 + x, 200 + y, 400 + x, 300 + y);
  line(700 + x, 100 + y, 400 + x, 300 + y);
		
	}
		
 function objectspikes (x1, y1, x2, y2) {
  
 //objects on spikes
 strokeWeight(20);
 arc(400 + x1, 96 + y1, 200 + x2, 90 + y2, 0, PI+QUARTER_PI, CHORD);
 arc(160 + x1, 150 + y1, 200 + x2, 200 + y2, 0, PI+QUARTER_PI, PIE);
 arc(660 + x1, 150 + y1, 200 + x2, 200 + y2, 0, PI+QUARTER_PI, OPEN);
	
 }
		
function triangles (x1, y1, x2, y2, x3, y3) {
 
 //extra triangle
 triangle(60 + x1, 270 + y1, 116 + x2, 80 + y2, 200 + x3, 400 + y3);
 triangle(30 +x1, 85 +y1, 58 + x2, 40 + y2, 100 + x3, 95 + y3);
 
  
}
