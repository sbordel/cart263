/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let img;
let colorsInImage = [];

function setup() {
  let c = createCanvas(100, 100);
  background(200);
  textAlign(CENTER);
  text('drop image', width / 2, height / 2);
  c.drop(gotFile);
}

function draw() {

}

function gotFile(file) {
  console.log(file);
  img = createImg(file.data, '').hide();
  console.log(img);

  resizeCanvas(img.width,img.height);
  image(img, 0, 0, width, height);
  loadPixels();
  console.log(pixels);

  for(let i=0; i<pixels.length; i+=4){
    let red = pixels[i];
    let green = pixels[i+1];
    let blue = pixels[i+2];
    let alpha = pixels[i+3];

    
  }
}