let bubbles = [];

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('data');
  
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
      
    bubbles.push(b);
  }

 
}

function mousePressed(){
  for (let i = 0; i < bubbles.length; i++) {
   bubbles[i].clicked(mouseX, mouseY);
  }
}



function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }


  clicked(pX, pY){
    let d = dist(pX, pY, this.x, this.y);
      //distance

    if(d < this.r){
      print("clicked bubble");
    }

    
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}
