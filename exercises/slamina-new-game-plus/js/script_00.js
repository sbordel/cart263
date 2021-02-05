
"use strict";

const num_toxicMush = 29;
const num_edibleMush = 31;

let toxicMush = [];
let edibleMush = [];

let mushrooms = [];

const QUESTION_DELAY = 2000;

  let currentAnswer = ``;
  let currentMushroom;

  let guessAnswer;

function preload() {

    for (let i = 0; i < num_toxicMush; i++) {
        toxicMush[i] = loadImage("assets/images/toxic/toxicmush_" + i + ".png");
    }

    for (let i = 0; i < num_edibleMush; i++) {
        edibleMush[i] = loadImage("assets/images/edible/ediblemush_" + i + ".png");
    }

    mushrooms = [].concat(toxicMush, edibleMush);
    

    if (annyang) {
      let commands = {
        'It is *guessToxicity': 
        }
        
      };
      annyang.addCommands(commands);
      annyang.start();

      textSize(70);
      textStyle(BOLD);
      textAlign(CENTER);
      textFont("fontTwo");
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(194, 201, 252);

    imageMode(CENTER);
    let randomMush = random(toxicMush);

    image(randomMush, width / 2, height / 2);
  
    function displayAnswer() {
      if (currentMushroom.includes(toxicMush) ){
        document.getElementById("answer").innerHTML = "yes";
      }
      else {
        document.getElementById("answer").innerHTML = "no"
      }
    }

  }
