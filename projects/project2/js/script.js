/************************** 

WELCOME TO THE ELECTRIC GARDEN
Samuelle Bordeleau

**************************/

"use strict";

/* variable assigned to a file that is dropped in the drop zone */
let droppedFile;

/* variables for droppedFile properties */
let fileSize; // number
let fileType; // string
let fileDate; // date

/* variables for droppedFile date properties */
let fileYear;
let fileMonth;
let fileDay;

/* variables for user's location et access  */
let userCountry;
let userRegion;
let userAccessDate;

/* variables each flower's properties (flowerData) */
let flowerData;
let flowerMonth;
let flowerDay;
let flowerSeason;

function setup() {
  // Creates a canvas
  var dropZone = createCanvas(windowWidth, windowHeight);
  dropZone.parent('p5Canvas');
  background(0);
  // Adds an event for when a file is dropped onto the canvas
  dropZone.drop(gotFile);
  //load json file with flower data
  flowerData = loadJSON('assets/data/flowers.json');
}

/* canvas resizes when window is resized */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noLoop();
}

/* gets user location with ipify API */
$(function getUserLocation() {
  $.getJSON("https://geo.ipify.org/api/v1?apiKey=at_OZGboRjmnwnVC8rVin6gnzz0BOWWQ",
    function (text) {
      userCountry = text.location.country;
      userRegion = text.location.region;

      let userLocation = userCountry + ", " + userRegion;

      userAccessDate = new Date();
      let userDay = userAccessDate.getDate();
      let userMonth = userAccessDate.getMonth() + 1;
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
  fileSize = file.size.toString();
  let fileSizeLgt = fileSize.length;
  fileType = file.type;
  fileDate = file.file.lastModifiedDate;
  console.log(fileSizeLgt);
  // triggers event that splices file timestamp
  splicedDate();
  mapflowerSeasons();
};

/* splices the droppedFile's timestamp into corresponding time property variables */
function splicedDate() {
  fileYear = fileDate.getFullYear(); // YYYY
  fileMonth = fileDate.getMonth(); // 0-11
  fileDay = fileDate.getDate(); // 1-31
};

function flowerSelect() {
let flowerPetals = flowerData.flower[11].petals;
  if (fileSizeLgt == flowerPetals) {

  } else if (fileSizeLgt == 0 || fileSizeLgt >= 10) {

  };
}

/* assigns flowerData date/time properties to variables */
function mapflowerSeasons() {
  //assigns day property to flowerDay
  flowerDay = flowerData.flower[11].day;
  // remaps the "hour" property of a flower to a value between the range of 0-11 (corresponding to the 12 months)
  // assigns numeral value monthDecimal
  let monthDecimal = map(flowerData.flower[11].hour, 0, 23, 0, 11);
  flowerMonth = parseInt(monthDecimal); //convert result to integer and assigns it to flowerMonth
  flowerSeasons();
};

/* TO SHRINK */
function flowerSeasons() {
  // spring == march 20 to june 21
  if ((flowerMonth == 3 && flowerDay >= 20 && flowerDay <= 31)
    || (flowerMonth == 4 && flowerDay >= 1 && flowerDay <= 30)
    || (flowerMonth == 5 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 6 && flowerDay >= 1 && flowerDay <= 21)) {
    flowerSeason = "Spring";
  }
  // summer == june 21 to september 22
  else if ((flowerMonth == 6 && flowerDay >= 21 && flowerDay <= 31)
    || (flowerMonth == 7 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 8 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 9 && flowerDay >= 1 && flowerDay <= 22)) {
    flowerSeason = "Summer";
  }
  // fall == september 22 to december 21
  else if ((flowerMonth == 9 && flowerDay >= 22 && flowerDay <= 31)
    || (flowerMonth == 10 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 11 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 12 && flowerDay >= 1 && flowerDay <= 21)) {
    flowerSeason = "Fall";
  }
  // winter == december 21 to march 20
  else if ((flowerMonth == 11 && flowerDay >= 21 && flowerDay <= 31)
    || (flowerMonth == 0 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 1 && flowerDay >= 1 && flowerDay <= 31)
    || (flowerMonth == 3 && flowerDay >= 1 && flowerDay <= 20)) {
    flowerSeason = "Winter";
  }
  console.log(flowerSeason);
};
