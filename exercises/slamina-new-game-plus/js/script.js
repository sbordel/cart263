
let toxicMush = [];
let numtoxicMush = 29;

let edibleMush = [];
let numedibleMush = 31;

let mushrooms = [];

//let currentMushroom;

function preload() {

    for (let i = 0; i < numtoxicMush; i++) {
        toxicMush[i] = loadImage("assets/images/toxic/toxicmush_" + i + ".png");
    }

    for (let i = 0; i < numedibleMush; i++) {
        edibleMush[i] = loadImage("assets/images/edible/ediblemush_" + i + ".png");
    }

    mushrooms = [].concat(toxicMush, edibleMush);

    console.log(mushrooms);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    noLoop();
}

function draw() {
    background(194, 201, 252);

    imageMode(CENTER);
    let randomMush = random(toxicMush);

    //imageSize(width / 2, height / 2);

    image(randomMush, width / 2, height / 2);
}

/*function checkIfToxic(){

    if( toxicMush.includes( currentMushroom ) ){
      // do something if array does include the mushroom
    }
    else {
      // do something if array does NOT include the mushroom
    }
  }
  
  function checkIfEdible(){
  
    if( edibleMush.includes( currentMushroom ) ){
      // do something if array does include the mushroom
    }
    else {
      // do something if array does NOT include the mushroom
    }
  }
*/ 
function mousePressed() {

  }
