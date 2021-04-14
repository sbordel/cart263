/**
SCREENS LIKE GROW LAMPS
Samuelle Bordeleau

This is a prototype for the index page of my project
*/

"use strict";

let droppedFile;
//let splicedDate;
let newDate;

let fileSize;
let fileType;
let fileDate;

function setup() {
  // create canvas
  var dropZone = createCanvas(windowWidth, windowHeight);
  dropZone.parent('p5Canvas');
  background(0);
  // Add an event for when a file is dropped onto the canvas
  dropZone.drop(gotFile);
}

function draw() {
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function gotFile(file) {
  let successImg = document.getElementById('imgDropped');
  console.log(file);

  droppedFile = file;

  //droppedFile = createP(file.data);
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    const img = createImg(file.data).hide();
    // Draw the image onto the canvas
    image(img, 0, 0, width, height);
    successImg.style.display = 'block';
  } else {
    successImg.style.display = 'block';
  }

  fileSize = file.size;
  fileType = file.subtype;
  fileDate = file.file.lastModifiedDate;

  //splicedDate();
}

/** need to fix this because fileDate isnt a String **/
//reference here (go to RegExp section): 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//reg exp character classes:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

/*
function splicedDate() {
  let splitString = split(fileDate, ' ');
  let day = text(splitString[0], 5, 30);
  let month = text(splitString[1], 5, 50);
  let date = text(splitString[2], 5, 70);

  console.log(fileDate);
  console.log(day);
  console.log(month);
  console.log(date);
}
*/