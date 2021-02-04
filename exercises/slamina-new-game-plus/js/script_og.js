"use strict";

const animals = [];

let toxic = [];
let edible = [];

  const QUESTION_DELAY = 2000;

  let currentAnswer = `CUTE SPECIMENS OF THE FUNGI KINGDOM`;
  let currentAnimal = ``;

function setup() {
    createCanvas(windowWidth, windowHeight);

      // creating variable to store array of toxic mushroom images
  let toxicMushrooms = [];

  let edibleMushrooms = [];


  function preload() {
  // creating for loop counting toxic mush images from 0 to **
    for (let i = 0; i <29; i++) {
      let toxicMushroom = loadImage(`assets/images/toxic/toxicmush_${i}.png`);
      toxicMushrooms.push(toxicMushroom);
    }
  }


    if (annyang) {
        let commands = {
          'I think it is *animal': guessAnimal
        };
        annyang.addCommands(commands);
        annyang.start();

        textSize(70);
        textStyle(BOLD);
        textAlign(CENTER);
        textFont("fontTwo");
    }
}


function draw() {
    background(194, 201, 252);

    
    displayAnswer();
}

function displayAnswer() {
    if (currentAnswer === currentAnimal) {
        fill(0, 255, 0);
    }
    else{
        fill(255, 0, 0);
    }
    text(currentAnswer, width / 2, height / 2);
}



function sayAnimalBackwards(animal) {
 let reverseAnimal = reverseString(animal);
 responsiveVoice.speak(reverseAnimal);
}


//Reverses the provided string

function reverseString(string) {
    // Split the string into an array of characters
    let characters = string.split('');
    // Reverse the array of characters
    let reverseCharacters = characters.reverse();
    // Join the array of characters back into a string
    let result = reverseCharacters.join('');
    // Return the result
    return result;
  } 


function guessAnimal(animal) {
    // Convert the guess to lowercase to match the answer format
    currentAnswer = animal.toLowerCase();
  }
  
  //Reset the answer text, get a new random animal, say its name

  function nextQuestion() {
    currentAnswer = ``;
    currentAnimal = random(animals);
    sayAnimalBackwards(currentAnimal);
  }
  
  //When the user clicks, go to the next question
  function mousePressed() {
    nextQuestion();
  }