var screen = 1;


//Screen 1 variables
var img2;

//Screen 2  variables
var img;


//Screen 3 variables
var img1, img3;

//Screen 4 variables
var img4, milk, meat, eggs, button, negative, postive, a = 0, b= 0;

//Screen 5 variables
var img6, img7;
//Screen 6 variables
var img5;



function preload() {
  img = loadImage('assets/Logo.png');
  img1 = loadImage('assets/Arrow.png');
  img2 = loadImage('assets/Arrow2.png');
  img3 = loadImage('assets/Icon.jpeg');
  img4 = loadImage('assets/Calender.png');
  img5 = loadImage('assets/DoorDash.png');
  img6 = loadImage('assets/Graph.png');
  img7 = loadImage('assets/Arrow3.png');
  milk = loadImage('assets/milk.png');
  meat = loadImage('assets/meat.png');
  eggs = loadImage('assets/eggs.png');
  negative = loadImage('assets/minus.png');
  positive = loadImage('assets/plus.png');
  robofont = loadFont('assets/Roboto-Medium.ttf');

}

function setup() {
  createCanvas(1080, 2280);
  //textFont(robotfont);
  textFont('Roboto-Medium');
  textSize(30);
  textAlign(CENTER);
}

function draw() {
  background(245);

  if (screen == 1) {
    screen1();
  } else if (screen == 2) {
    screen2();
  } else if (screen == 3) {
    screen3();
  } else if (screen == 4) {
    screen4();
  } else if (screen == 5) {
    screen5();
  } else if (screen == 6) {
    screen6();
  }

}

function mousePressed() {
  if (screen == 1) {
    if (mouseX >= 185 && mouseX <= 885 && mouseY >= 1875 && mouseY <= 2025) {
      screen = 2;
    }
  } else if (screen == 2) {
    if (mouseX >= 185 && mouseX <= 885 && mouseY >= 1875 && mouseY <= 2025) {
      screen = 3;
    }
  } else if (screen == 3) {

    if (mouseX >= 285 && mouseX <= 785 && mouseY >= 350 && mouseY <= 850) {
      screen = 4;
    }
    if (mouseX >= 285 && mouseX <= 785 && mouseY >= 1000 && mouseY <= 1500) {
      screen = 5;
    }
    if (mouseX >= 285 && mouseX <= 785 && mouseY >= 1650 && mouseY <= 2150) {
      screen = 6;
    }
  } else if (screen == 4) {
    // console.log(mouseX,mouseY);}
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <= 150) {
      screen = 3;
    }
  } else if (screen == 5) {
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <= 150) {
      screen = 3;
    }
  } else if (screen == 6) {
    if (mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <= 150) {
      screen = 3;
    }
  }
}

function screen1() {
  background(180);
  fill(230);
  noStroke();
  rect(0, 1650, 1080, 1000, 100);
  textSize(80);
  noStroke();
  fill(0);
  textSize(45);
  text('Mobile Application for Restaurant Kitchen Managers', 540, 1500);
  textSize(80);
  text('Get Started', 475, 1975);
  fill(0);
  textSize(90);
  text('Lets Make A Difference', 540, 300);
  strokeWeight(8);
  stroke(203, 32, 45, 250);
  noFill();
  rect(185, 1875, 700, 150, 20);
  image(img, -40, 250, 1150, 1750);
  image(img2, 720, 1910, 100, 75);
}

function screen2() {
  background(180);
  image(img, -10, -180, 1100, 1700);
  fill(230);
  noStroke();
  rect(0, 900, 1080, 2000, 100);
  fill(0);
  textSize(80);
  text('LOGIN', 200, 1100);
  textSize(50);
  text('Username', 200, 1250);
  text('Password', 200, 1600);
  strokeWeight(8);
  stroke(203, 32, 45, 250);
  noFill();
  rect(185, 1875, 700, 150, 20);
  noStroke();
  fill(0);
  textSize(80);
  text('LOGIN', 475, 1975);
  image(img2, 650, 1910, 100, 75);
  stroke(0);
  strokeWeight(2);
  line(100, 1400, 975, 1400);
  line(100, 1750, 975, 1750);



}

function screen3() {
  background(245);
  fill(255);
  rect(200, 150, 10, 50);
  strokeWeight(10);
  stroke(203, 32, 45, 250);
  noFill();
  circle(535, 600, 500);
  noStroke();
  fill(0);
  textSize(60);
  text('INVENTORY', 400, 575, 300, 100);
  strokeWeight(10);
  stroke(203, 32, 45, 250);
  noFill();
  circle(535, 1250, 500);
  noStroke();
  fill(0);
  textSize(60);
  text('INSIGHTS', 400, 1230, 300, 100);
  strokeWeight(10);
  stroke(203, 32, 45, 250);
  noFill();
  circle(535, 1900, 500);
  noStroke();
  fill(0);
  textSize(60);
  text('POST AD', 530, 1925);
  noStroke();
  fill(203, 32, 45, 250);
  rect(0, 0, 1080, 200);
  image(img, 430, -25, 225, 350);
  image(img3, 950, 55, 90, 90);
  fill(255);
  rect(40, 100, 80, 10);
  rect(40, 125, 80, 10);
  rect(40, 75, 80, 10);

}

function mouseClicked() {
  if (mouseX >= 550 && mouseX <= 595 && mouseY >= 1575 && mouseY <= 1620) {
    a = a + 1;
  } else if (mouseX >= 425 && mouseX <= 470 && mouseY >= 1575 && mouseY <= 1620) {
    a = a - 1;
  }


}

function screen4() {
  background(245);
  fill(0);
  textSize(80);
  text('INVENTORY', 400, 275, 300, 100);
  noStroke();
  fill(203, 32, 45, 250);
  rect(0, 0, 1080, 200);
  image(img, 430, -25, 225, 350);
  image(img1, 10, 30, img1.width / 5, img1.height / 5);
  image(img3, 950, 55, 90, 90);
  image(img4, 0, 400, 1075, 900);
  fill(0);
  textSize(50);
  text('Ingredients', 200, 1400);
  text('Quantity', 515, 1400);
  text('Expiration Date', 850, 1400);
  image(milk, 80, 1500, 250, 250);
  image(meat, 80, 1750, 250, 250);
  image(eggs, 80, 1970, 250, 250);
  text('10/23/2021', 850, 1615);
  text('10/30/2021', 850, 1890);
  text('10/25/2021', 850, 2110);
  image(negative, 425, 1575, 45, 45);
  image(positive, 550, 1575, 45, 45);
  text(a, 510, 1615);
  text(b,510,1890);
  text(b,510,2115);
  image(negative, 425, 1850, 45, 45);
  image(positive, 550, 1850, 45, 45);
  image(negative, 425, 2075, 45, 45);
  image(positive, 550, 2075, 45, 45);
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(128, 2175, 300, 75, 20);
  fill(0);
  noStroke();
  text('Add',300,2230);
  image(positive, 150, 2187, 50, 50);







}

function screen5() {
  background(245);
  noStroke();
  fill(203, 32, 45, 250);
  rect(0, 0, 1080, 200);
  image(img, 430, -25, 225, 350);
  image(img1, 10, 30, img1.width / 5, img1.height / 5);
  fill(0);
  textSize(80);
  text('INSIGHTS', 400, 300, 300, 100);
  image(img3, 950, 55, 90, 90);
  image(img6, -475, 1000, 2050, 1000);
  text('October', 540, 2150);
  image(img2, 800, 2085, 100, 75);
  image(img7, 175, 2085, 100, 75);
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(110, 525, 150, 150, 20);
  rect(110, 800, 150, 150, 20);
  fill(0);
  textSize(50);
  text('Quantity of food cook', 350, 500);
  text('Number of customers', 350, 775);




}

function screen6() {
  background(245);
  noStroke();
  fill(203, 32, 45, 250);
  rect(0, 0, 1080, 200);
  image(img, 430, -25, 225, 350);
  image(img1, 10, 30, img1.width / 5, img1.height / 5);
  image(img3, 950, 55, 90, 90);
  image(img5, 10, 220, 1060, 2030);
}
