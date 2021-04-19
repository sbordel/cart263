/* ****** ****** 

WELCOME TO THE ELECTRIC GARDEN
Samuelle Bordeleau

******  ****** */

"use strict";

//variable assigned to a file that is dropped in the drop zone
let droppedFile;

//variables for droppedFile properties
let fileSize; // number
let fileType; // string
let fileDate; // date

//variables for droppedFile date properties 
let fileYear;
let fileMonth;
let filedateNum;
let fileHours;
let fileMin;
let fileSec;
let fileMilli;
let fileDay;

//variables for user's location
let userCountry;
let userRegion;

//variables each flower's properties (flowerData)
let flowerData;
let flowerMonth;
let flowerDay;


function setup() {
  // Creates a canvas
  var dropZone = createCanvas(windowWidth, windowHeight);
  dropZone.parent('p5Canvas');
  background(0);

  flowerData = loadJSON('assets/data/flower_test.json');
  //console.log(flowerData.key)

  // Adds an event for when a file is dropped onto the canvas
  dropZone.drop(gotFile);
}


function draw() {
  noLoop();
}

// canvas resizes when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// gets user location with ipify API 
$(function getUserLocation() {
  $.getJSON("https://geo.ipify.org/api/v1?apiKey=at_OZGboRjmnwnVC8rVin6gnzz0BOWWQ",
    function (text) {
      userCountry = text.location.country;
      userRegion = text.location.region;

      //console.log(userCountry + ", " + userRegion);
    }
  );
});

/* receives dropped file, triggers an event to show that file has been received
and assigns the files properties to variables (fileSize, fileType & fileDate) */
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
  fileType = file.type;
  fileDate = file.file.lastModifiedDate;
  // triggers event that splices file timestamp
  splicedDate();
  mapflowerSeasons();
};

/* splices the droppedFile's timestamp into corresponding time property variables
   timestamp format ==> Wed Apr 14 2021 11:41:13 GMT-0400 (GMT-04:00) */
function splicedDate() {
  fileYear = fileDate.getFullYear(); // YYYY
  fileMonth = fileDate.getMonth(); // 0-11
  fileDay = fileDate.getDate(); // 1-31
  fileHours = fileDate.getHours(); // 0-23
  fileMin = fileDate.getMinutes(); // 0-59
  fileSec = fileDate.getSeconds(); // 0-59
  fileMilli = fileDate.getMilliseconds(); // 0-999
  //fileDayofWeek = fileDate.getDay(); // 0-6
};


function mapflowerSeasons() {
  flowerDay = flowerData.flowers[0].day;
  console.log(flowerDay);
};

/*
function flowerSeasons() {
  //spring : march 20 to june 21
  if ((flowerMonth == 3 && flowerDay >= 20 && flowerDay <= 31)
    || (flowerMonth == 4 && flowerDay >= 1 && flowerDay <= 30)
    || (flowerMonth == 5 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 6 && flowerDay >= 1 && flowerDay <= 21)) {
    flowerSeason = "Spring";
  }
  //summer : june 21 to 22 september
  else if ((flowerMonth == 6 && flowerDay >= 21 && flowerDay <= 31)
    || (flowerMonth == 7 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 8 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 9 && flowerDay >= 1 && flowerDay <= 22)) {
    flowerSeason = "Summer";
  }
  //fall : 22 september to 21 december
  else if ((flowerMonth == 9 && flowerDay >= 22 && flowerDay <= 31)
    || (flowerMonth == 10 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 11 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 12 && flowerDay >= 1 && flowerDay <= 21)) {
    flowerSeason = "Fall";
  }
};
*/

