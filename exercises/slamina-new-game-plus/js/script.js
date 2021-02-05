"use strict";

let toxicMush = [];
let edibleMush = [];

let toxicButton;
let edibleButton;

let mushrooms = [];

let randomMush;

function preload() {

  for (let i = 0; i < 29; i++) {
      toxicMush[i] = loadImage("assets/images/toxic/toxicmush_" + i + ".png");
  }

  for (let i = 0; i < 31; i++) {
      edibleMush[i] = loadImage("assets/images/edible/ediblemush_" + i + ".png");
  }

  mushrooms = toxicMush.concat(edibleMush);

   /* textSize(70);
    textStyle(BOLD);
    textAlign(CENTER);
    textFont("fontTwo");*/  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  toxicButton = createButton('toxic');
  toxicButton.position(width * 0.8, height / 2, 65);
  toxicButton.mousePressed(toxicGuess);

  edibleButton = createButton('edible');
  edibleButton.position(width * 0.18, height / 2, 65);
  edibleButton.mousePressed(toxicGuess);

  textSize(64);
  textStyle(BOLD);
  textAlign(CENTER);
}

function draw() {
  background(194, 201, 252);

  imageMode(CENTER);
  let randomMush = random(mushrooms);

  image(randomMush, width / 2, height / 2);

  noLoop();

}

function toxicGuess() {
  if (toxicMush.includes(image < 29)){
    responsiveVoice.speak("this mushroom is toxic", "UK English Female", {onend: newMushroom}, {pitch: 6});
  }
  else {
    responsiveVoice.speak("this mushroom is edible", "UK English Female", {onend: newMushroom}, {pitch: 0.5});
  }
}

function newMushroom(){
 draw(randomMush);
}

