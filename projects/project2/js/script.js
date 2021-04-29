/************************** 

WELCOME TO THE ELECTRIC GARDEN
Samuelle Bordeleau

**************************/

"use strict";

// VARIABLES
//
// file that is dropped in the drop zone 
let droppedFile;
// file properties (droppedFile)
let fileSize; // number
let fileType; // string
let fileDate; // date
// file date properties (droppedFile)
let fileYear;
let fileMonth;
let fileDay;
// user location and access date  
let userCountry;
let userRegion;
let userAccessDate;
// flower properties (flowerJSON) 
let flowerJSON;
let flowerMonth;
let flowerDay;
let flowerSeason;
// drawing properties 
let drawingFlower;
let drawingName;
let drawingDate;
let drawingLocation;
//
let dropZone;
let loadImg;
let pageURL;

let chosenFlowers = [];
let seasonChosen ='';

//const parsedJSON = JSON.parse(flowerJSON);

// PRELOAD()
//
function preload() {
  //load greenhouse image as "dropZone"
  dropZone = createImg('assets/images/shed_small.png');
}

// SET UP()
//
function setup() {
  //let canvas = createCanvas(window)
  //noCanvas();
  //give dropZone the #shed ID
  dropZone.id('shed');
  // Adds an event for when a file is dropped onto the canvas
  dropZone.drop(gotFile);
  //load json file with flower data
  flowerJSON = loadJSON('assets/data/flowers.json');
  //check page URL and display content accordingly
  pageURL = window.location.href.split('/')[3];
  if (pageURL == "greenhouse.html") {
    dropZone.style('display', 'block');
  }
  else {
    dropZone.style('display', 'none');
  }
}

// DRAW()
function draw() {
  noLoop();
}

// GENERAL DOC FUNCTIONS
//
// canvas resizes when window is resized 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// makes tooltips appear on hover 
$(function () {
  $(document).tooltip({
    track: true
  });
});

// GET USER LOCATION
//
// gets user location with ipify API 
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

// GET DROPPED FILE
//
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
  //console.log(fileSizeLgt);
  // triggers event that splices file timestamp
  //splicedDate();
  //mapflowerSeasons();
  flowerSelect(fileDate.getMonth(),fileDate.getDate());
  console.log(chosenFlowers);
  console.log(seasonChosen);
  localStorage.setItem("chosenSeason",seasonChosen);
  localStorage.setItem("flowerArray",JSON.stringify(chosenFlowers));
  window.location = ('garden.html');

};

// FILE & FLOWER DATA
//
// splices the droppedFile's timestamp into corresponding time property variables 
function splicedDate() {
  fileYear = fileDate.getFullYear(); // YYYY
  fileMonth = fileDate.getMonth(); // 0-11
  fileDay = fileDate.getDate(); // 1-31
};

function flowerSelect(fileMonth, fileDay) {
  //console.log("file month: "+fileMonth);
  //let flowerPetals = flowerJSON.flower[11].petals;
  //if (fileSizeLgt == flowerPetals) {
  //} else if (fileSizeLgt == 0 || fileSizeLgt >= 10) {
    /***************  add stuff here ~~~~ */
  //};

  for (let i =0; i< flowerJSON.flower.length; i++ ){
    let flowerPetals = parseInt(flowerJSON.flower[i].petals[0]);
    if(flowerPetals===fileMonth){
      let flowerDay = parseInt(flowerJSON.flower[i].day[0]);
      //console.log("flowerDay::"+flowerDay);
      //console.log("day::"+fileDay);
      seasonChosen = flowerSeasons(fileMonth, fileDay);
      chosenFlowers.push(flowerJSON.flower[i]);

    }
   
  }
  

}
// assigns flowerJSON date/time properties to variables 
function mapflowerSeasons() {
  //assigns day property to flowerDay
  flowerDay = flowerJSON.flower[11].day;
  // remaps the "hour" property of a flower to a value between the range of 0-11 (corresponding to the 12 months)
  // assigns numeral value monthDecimal
  let monthDecimal = map(flowerJSON.flower[11].hour, 0, 23, 0, 11);
  flowerMonth = parseInt(monthDecimal); //convert result to integer and assigns it to flowerMonth
  //flowerSeasons();
};

/* TO SHRINK */
function flowerSeasons(flowerMonth, flowerDay) {

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
    || (flowerMonth == 2 && flowerDay >= 1 && flowerDay <= 31)) {
      flowerSeason = "Winter";
  }
  return(flowerSeason)
};

/*
let flowerData = {
  petals: ``,
  stem: ``,
  button: ``,
  leaf: ``,
  day: ``,
  hour: ``,
  drawing: ``
};

function drawingTooltip(){
  let drawingFlower.title = "This flower was planted" + drawingDate + " in " + drawingLocation
}
*/