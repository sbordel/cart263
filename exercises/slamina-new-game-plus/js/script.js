"use strict";

const animals = [
    "aardvark",
    "alligator",
    "alpaca",
    "antelope",
    "ape",
    "armadillo",
    "baboon",
    "badger",
    "bat",
    "bear",
    "beaver",
    "bison",
    "boar",
    "buffalo",
    "bull",
    "camel",
    "canary",
    "capybara",
    "cat",
    "chameleon",
    "cheetah",
    "chimpanzee",
    "chinchilla",
    "chipmunk",
    "cougar",
    "cow",
    "coyote",
    "crocodile",
    "crow",
    "deer",
    "dingo",
    "dog",
    "donkey",
    "dromedary",
    "elephant",
    "elk",
    "ewe",
    "ferret",
    "finch",
    "fish",
    "fox",
    "frog",
    "gazelle",
    "gila monster",
    "giraffe",
    "gnu",
    "goat",
    "gopher",
    "gorilla",
    "grizzly bear",
    "ground hog",
    "guinea pig",
    "hamster",
    "hedgehog",
    "hippopotamus",
    "hog",
    "horse",
    "hyena",
    "ibex",
    "iguana",
    "impala",
    "jackal",
    "jaguar",
    "kangaroo",
    "koala",
    "lamb",
    "lemur",
    "leopard",
    "lion",
    "lizard",
    "llama",
    "lynx",
    "mandrill",
    "marmoset",
    "mink",
    "mole",
    "mongoose",
    "monkey",
    "moose",
    "mountain goat",
    "mouse",
    "mule",
    "muskrat",
    "mustang",
    "mynah bird",
    "newt",
    "ocelot",
    "opossum",
    "orangutan",
    "oryx",
    "otter",
    "ox",
    "panda",
    "panther",
    "parakeet",
    "parrot",
    "pig",
    "platypus",
    "polar bear",
    "porcupine",
    "porpoise",
    "prairie dog",
    "puma",
    "rabbit",
    "raccoon",
    "ram",
    "rat",
    "reindeer",
    "reptile",
    "rhinoceros",
    "salamander",
    "seal",
    "sheep",
    "shrew",
    "silver fox",
    "skunk",
    "sloth",
    "snake",
    "squirrel",
    "tapir",
    "tiger",
    "toad",
    "turtle",
    "walrus",
    "warthog",
    "weasel",
    "whale",
    "wildcat",
    "wolf",
    "wolverine",
    "wombat",
    "woodchuck",
    "yak",
    "zebra"
  ];

  const QUESTION_DELAY = 2000; 

  let currentAnswer = `Click to begin.`;
  let currentAnimal = ``;

function setup() {
    createCanvas(windowWidth, windowHeight);

    if (annyang) {
        let commands = {
          'I think it is *animal': guessAnimal
        };
        annyang.addCommands(commands);
        annyang.start();

        textSize(100);
        textStyle(BOLD);
        textAlign(CENTER);
    }
}


function draw() {
    background(0);

    
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