/* ****** ****** 

WELCOME TO THE ELECTRIC GARDEN
Samuelle Bordeleau

******  ****** */

"use strict";

//variable assigned to a file that is dropped in the drop zone
let droppedFile;

//variables for droppedFile; properties
let fileSize; // number
let fileType; // string
let fileDate; // date

//variables for droppedFile; date properties 
// all numbers
let fileYear; 
let fileMonth; 
let filedateNum; 
let fileHours; 
let fileMin; 
let fileSec; 
let fileMilli; 
let fileDay; 


function setup() {
  // Creates a canvas
  var dropZone = createCanvas(windowWidth, windowHeight);
  dropZone.parent('p5Canvas');
  background(0);
  // Adds an event for when a file is dropped onto the canvas
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
  // assign droppedFile properties to variables
  fileSize = file.size;
  fileType = file.subtype;
  fileDate = file.file.lastModifiedDate;

  splicedDate();
}

/* splices the droppedFile's timestamp into corresponding time property variables
   timestamp format ==> Wed Apr 14 2021 11:41:13 GMT-0400 (GMT-04:00) */

function splicedDate() {
  fileYear = fileDate.getFullYear(); // YYYY
  fileMonth = fileDate.getMonth(); // 0-11
  filedateNum = fileDate.getDate(); // 1-31
  fileHours = fileDate.getHours(); // 0-23
  fileMin = fileDate.getMinutes(); // 0-59
  fileSec = fileDate.getSeconds(); // 0-59
  fileMilli = fileDate.getMilliseconds(); // 0-999
  fileDay = fileDate.getDay(); // 0-6

  console.log(fileYear);
  console.log(fileMonth);
  console.log(filedateNum);
  console.log(fileHours);
  console.log(fileMin);    
  console.log(fileSec);
  console.log(fileMilli);
  console.log(fileDay);
}

/*
JSON FILE DATA TYPE

stem, button: boolean
countrycode: string
leaf, petals, day, hour, minutes, seconds, millis, key: number
*/


/*
NOTES FOR PETAL VARIABLES IN JSON FILE

tulip = -1
not defined = 0
chaotic = 99
*/

