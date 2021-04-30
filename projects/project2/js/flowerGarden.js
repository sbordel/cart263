/* ***************** 

WELCOME TO THE ELECTRIC GARDEN
Sam Bordeleau

(see README file for credits)

***************** */


let chosenSeason;

function setup() {
  //create canvas and make background transparent
  createCanvas(windowWidth, windowHeight);
  clear();
  //
  chosenSeason = parseInt(localStorage.getItem("chosenSeason"));
  var flowerList = JSON.parse(localStorage.getItem("flowerList"));
  console.log(flowerList);

  // if the array contains objects, draw the flowers
  if (flowerList != null) {
    gotFlower(flowerList);
  }
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

// when clear button is pressed, clear local storage and refresh page
function clearData() {
  localStorage.clear();
  window.location.reload(true); 

}

function flowerSelect(fileMonth, fileDay) {
  for (let i = 0; i < flowerJSON.flower.length; i++) {
    let flowerPetals = parseInt(flowerJSON.flower[i].petals[0]);
  }
}

function gotFlower(flowerList) {
  noFill();
  stroke(0);
  console.log(flowerList);
  // draw every flower in the flower list according to its object properties
  for (let i = 0; i < flowerList.length; i++) {
    beginShape();
    for (let path of flowerList[i].data.drawing) {
      for (let j = 0; j < path[0].length; j++) {
        //each path is 2 arrays (x and y)
        let x = (path[0][j]) + flowerList[i].offsetX;
        let y = (path[1][j]) + flowerList[i].offsetY;
        vertex(x, y);
      }
    }
    endShape();
  }
}


function draw() {
  noLoop();
}
