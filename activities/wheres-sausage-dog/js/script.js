"use strict";

/**
declaring global constants for # of animals image we have (NUM_ANIMAL_IMAGES)
and the number of animal image we want to display (NUM_ANIMALS)
*/
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100 ;

// creating variable to store array of animal images
let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

function preload() {
// creating for loop counting animal images from 0 to 9
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage(`assets/images/sausage-dog.png`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create the animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
// creating new instance of the class animal
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

    let x = random(0, width);
    let y = random(0, height);
    sausageDog = new SausageDog(x, y, sausageDogImage);
}

function draw() {
  background(255, 0, 255);
  // weve create an array for NUM_ANIMAL_IMAGES so we will be calling the array
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }
  
  sausageDog.update();
}

function mousePressed() {
  sausageDog.mousePressed();
}
