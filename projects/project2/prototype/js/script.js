/**
SCREENS LIKE GROW LAMPS
Samuelle Bordeleau

This is a prototype for the index page of my project
*/

"use strict";

let fileName = document.getElementById('line1');
let fileSize = document.getElementById('line2');
let fileType = document.getElementById('line3');
let fileDate = document.getElementById('line4');

let instructions = document.getElementById('instruct');

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

function changeText(file){
  fileName.innerHTML = file.name;
  fileSize.innerHTML = file.size;
  fileType.innerHTML = file.subtype;
  fileDate.innerHTML = file.file.lastModifiedDate;
}

function gotFile(file) {
  let successImg = document.getElementById('imgDropped');
  let fileInfo = document.getElementById('fileInfo');
  console.log(file);
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    const img = createImg(file.data).hide();
    // Draw the image onto the canvas
    image(img, 0, 0, width, height);
    instructions.style.display = 'none';
    successImg.style.display = 'block';
    changeText(file);
    fileInfo.style.display = 'block';

  } else { 
    successImg.style.display = 'block';
    fileInfo.style.display = 'block';
  }
}

//$(fileName).text(inputName);