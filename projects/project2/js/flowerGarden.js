/* ***************** 

WELCOME TO THE ELECTRIC GARDEN
Sam Bordeleau

(see README file for credits)

***************** */

let flowerJSONArray;
let chosenSeason;

function setup() {
//create canvas and make background transparent
    createCanvas(windowWidth, windowHeight);
    clear();
    noLoop()

   // flowerJSON = loadJSON('assets/data/flowers.json', drawFlowers);
   // console.log(flowerJSON.key)
   console.log(localStorage.getItem("chosenSeason"))
   //localStorage.setItem("chosenSeason",seasonChosen);
   console.log(JSON.parse(localStorage.getItem("flowerArray")));
   flowerJSONArray = JSON.parse(localStorage.getItem("flowerArray"));
   chosenSeason = parseInt(localStorage.getItem("chosenSeason"));
   gotFlower(flowerJSONArray[0],0,0);

   
  }

// function drawFlowers(data){
// for(let i=0; i< data.length; i++){
//   console.log(data[i]);
// }
// //draw specified flowers from the flowers.json JSON file 
// gotFlower(data[7],0,0);
// gotFlower(data[1],255,0);
// gotFlower(data[2],0,255);
// gotFlower(data[3],255,255);

// }

function gotFlower(data,offsetX,offsetY){
  console.log(data.drawing);
  console.log(data.key);
  noFill();
  stroke(0);
beginShape();
  for(let path of data.drawing){
    for(let i =0; i<path[0].length;i++){
      //each path is 2 arrays (x and y)
      let x = (path[0][i])+offsetX;
      let y = (path[1][i])+offsetY;
      vertex(x,y);
    }
    endShape();
  }
}


function draw() {

}
