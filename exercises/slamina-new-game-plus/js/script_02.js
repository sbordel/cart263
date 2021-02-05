"use strict";

let toxicMush = [];
let edibleMush = [];

let mushrooms = [];

// Current thing they're supposed to say they love
let currentMush = [];
// What text to display on the canvas
let displayAnswer = ``;

let randomMush;

function preload() {

  for (let i = 0; i < 29; i++) {
      toxicMush[i] = loadImage("assets/images/toxic/toxicmush_" + i + ".png");
  }

  for (let i = 0; i < 31; i++) {
      edibleMush[i] = loadImage("assets/images/edible/ediblemush_" + i + ".png");
  }

  mushrooms = [].concat(toxicMush, edibleMush);

   /* textSize(70);
    textStyle(BOLD);
    textAlign(CENTER);
    textFont("fontTwo");*/

  let randomMush = function random(mushrooms){
    
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Text defaults
  textSize(64);
  textStyle(BOLD);
  textAlign(CENTER);

  // Set up annyang
  if (annyang) {
    var command = {
      "It is *answeredMush": handleUserSpeech,
    };

    annyang.addCommands(command);
    annyang.start();
    // Choose a phrase for the user to say first
    newMushroom();
  }

  displayAnswer = document.getElementById("answer").innerHTML
}

  function checkIfToxicMush() {
    if (currentMushroom.includes(toxicMush) ){
      currentMush = `yes`;
    }
    else {
      currentMush = `no`;
    }
  }


  
function draw() {
  background(194, 201, 252);

  imageMode(CENTER);
  let randomMush = random(mushrooms);

  image(randomMush, width / 2, height / 2);

  noLoop();
}

function handleUserSpeech(answeredMush) {
  // Stop listening for a moment
  annyang.pause();

  if (answeredMush.toLowerCase() === currentMush.toLowerCase()) {
    // If they got it right, show smiley face
    displayAnswer = `:-)`;
    // Assign a new affirmation after five seconds
    setTimeout(newMushroom, 5000);
  }
  else {
    // If they were wrong, mock them.
    displayAnswer = `:(`;
  }
}

/**
Chooses a random thing to love and tells the user to say they love it.
*/
function newMushroom() {
  currentMush = random(mushrooms);
  displayAnswer = `Is it toxic?"`;
  annyang.resume();
}

function mousePressed(randomMush) { 
  randomMush = randomMush + 1;
}