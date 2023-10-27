let bubbles =[];

function setup() {
  createCanvas(800, 800);

  
  for(let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);

    bubbles[i] = new Bubble(x, y, r);
    
  }
  

  //bubbles[1] = new Bubble(400, 200, 20);
 
}

function mousePressed(){
  let rA = random(10, 50);
  let b = new Bubble(mouseX, mouseY, rA);

  bubbles.push(b);
}

function mouseDragged(){
  let rA = random(10, 50);
  let b = new Bubble(mouseX, mouseY, rA);

  bubbles.push(b);
}

function keyPressed(){
  if (keyCode === 32){
    clear();
  }
}

function keyTyped(){
  if (key === 'w'){
    background(255)
  } else if (key === 'b') {
    background(0);
  }
}


function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move();
  }
  
}

class Bubble {
  constructor(tempX, tempY, tempR){
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }
  
  move(){
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  show() {
    //Bubbles
      stroke(random(255), random(255), random(255));
      strokeWeight(4);
      noFill();

    /*
    //Smoke
      fill(50, 168, 82);
      noStroke();
    */

    ellipse(this.x, this.y, this.r * 2);
  }
}
