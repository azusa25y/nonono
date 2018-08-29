var song;
var currentText = "";
var analyzer;
// var img;

function preload(){
	// img = loadImage('emojiNono.jpg');
	song = loadSound("02 - No No No.mp3");
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER);
	textSize(180);
	textStyle(BOLD);
	stroke(0);
	strokeWeight(2);
	song.play();
	
		// create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
	// image(img, mouseX, mouseY, 30, 30);
}

function draw() {
	background(0);
	
	push();
	var rms = analyzer.getLevel();
  fill(255);
  stroke(255);  
	this.x = random(0, width);
  this.y = random(0, height);
  // Draw an ellipse with size based on volum
  ellipse(this.x, this.y, 10+rms*300, 10+rms*300);
	pop();
	
	updateText();
	fill('hotpink');
	text(currentText, width/2, height/2);
  fill('darkorange');
	text(currentText, width/2+8, height/2+6);
	fill('limegreen');
	text(currentText, width/2+16, height/2+12);
  fill('greenyellow');
	text(currentText, width/2+24, height/2+18);
}

function updateText(x,y){
	push();
	translate(x,y);
	if(song.currentTime() > 3){
		currentText = "";
	}
	if(song.currentTime() > 17){
		currentText = "NO";
	}
	if(song.currentTime() > 18.3){
		currentText = "NO NO";
	}
	if(song.currentTime() > 20){
		currentText = "NO NO NO";
	}
		if(song.currentTime() > 28){
		currentText = "La";
	}
	if(song.currentTime() > 29.5){
		currentText = "La La";
	}
	if(song.currentTime() > 30.7){
		currentText = "La La La";
	}
		if(song.currentTime() > 33.5){
		currentText = "La";
	}
	if(song.currentTime() > 34.5){
		currentText = "La La";
	}
	if(song.currentTime() > 36){
		currentText = "La La La";
	}
	if(song.currentTime() > 39){
		currentText = "Don't know";
	}
	if(song.currentTime() > 40){
		currentText = "the first thing";
	}
	if(song.currentTime() > 40.7){
		currentText = "about";
	}
	if(song.currentTime() > 41.4){
		currentText = "who you are";
	}
		if(song.currentTime() > 44.3){
		currentText = "My heart";
	}
	if(song.currentTime() > 45.3){
		currentText = "is waiting";
	}
	if(song.currentTime() > 46){
		currentText = "taken in";
	}
	if(song.currentTime() > 46.8){
		currentText = "from the start";
	}
		if(song.currentTime() > 49.5){
		currentText = "If we don't";
	}
	if(song.currentTime() > 50.5){
		currentText = "go now";
	}
		if(song.currentTime() > 51.3){
		currentText = "we won't";
	}
	if(song.currentTime() > 52.1){
		currentText = "get very far";
	}
	if(song.currentTime() > 55){
		currentText = "Don't know";
	}
	if(song.currentTime() > 55.8){
		currentText = "the first thing";
	}
		if(song.currentTime() > 56.6){
		currentText = "about";
	}
		if(song.currentTime() > 57.5){
		currentText = "who you are";
	}
  	if(song.currentTime() > 60.3){
		currentText = "NO";
	}
		if(song.currentTime() > 61.5){
		currentText = "NO NO";
	}
		if(song.currentTime() > 63){
		currentText = "NO NO NO";
	}
	if(song.currentTime() > 92.6){
		textSize(80);
		currentText = "Don't know";
	}
	if(song.currentTime() > 93.2){
		currentText = "the first thing";
	}
	if(song.currentTime() > 94){
		currentText = "about";
	}
	if(song.currentTime() > 95){
		currentText = "who you are";
	}
		if(song.currentTime() > 98){
		currentText = "My heart";
	}
	if(song.currentTime() > 98.7){
		currentText = "is waiting";
	}
	if(song.currentTime() > 99.7){
		currentText = "taken in";
	}
	if(song.currentTime() > 100.5){
		currentText = "from the start";
	}
		if(song.currentTime() > 103.2){
		currentText = "If we don't";
	}
	if(song.currentTime() > 104){
		currentText = "go now";
	}
		if(song.currentTime() > 104.8){
		currentText = "we won't";
	}
	if(song.currentTime() > 105.5){
		currentText = "get very far";
	}
	if(song.currentTime() > 108.5){
		currentText = "Don't know";
	}
	if(song.currentTime() > 109.3){
		currentText = "the first thing";
	}
		if(song.currentTime() > 110.3){
		currentText = "about";
	}
		if(song.currentTime() > 111){
		currentText = "who you are";
	}
	
  	if(song.currentTime() > 113.5){
		currentText = "NO";
	}
		if(song.currentTime() > 115){
		currentText = "NO NO";
	}
		if(song.currentTime() > 116.4){
		currentText = "NO NO NO";
	}
	pop();
}
