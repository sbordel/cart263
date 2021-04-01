/**
SCREENS LIKE GROW LAMPS
Samuelle Bordeleau

This is a prototype for the index page of my project
*/

"use strict";

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
}


/*
$('#dropSection').fileDrop({
  onFileRead : function(fileCollection){
      $.each(fileCollection, function(){
          //Do stuff with fileCollection here!
      });
  },
  overClass : 'my-custom-class',
  addClassTo : '#anotherElement',
  decodebase64 : true
});*/

  
    
/*
$('#dropSection').droppable({
    drop: function (event, ui) {
        
    }
});*/