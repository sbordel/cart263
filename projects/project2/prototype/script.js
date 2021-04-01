/**
SCREENS LIKE GROW LAMPS
Samuelle Bordeleau

This is a prototype for the index page of my project
*/

"use strict";

"use strict";

let img;
let colorsInImage = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let img = document.getElementById('dropSection');
  background(0);
  textAlign(CENTER);
  img.drop(gotFile);
}

function draw() {

}

function gotFile(file) {
    console.log(file);
    img = createImg(file.data, '').hide();
    console.log(img);
  
    /*
    resizeCanvas(img.width,img.height);
    image(img, 0, 0, width, height);
    loadPixels();
    console.log(pixels);
  
    for(let i=0; i<pixels.length; i+=4){
      let red = pixels[i];
      let green = pixels[i+1];
      let blue = pixels[i+2];
      let alpha = pixels[i+3];
  
      
    }*/
  }

/*
$('#dropSection').droppable({
    drop: function (event, ui) {
        
    }
});*/