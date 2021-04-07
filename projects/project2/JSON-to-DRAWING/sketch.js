/*
Code written by Sabine Rosenberg

*/

let word;
let wordTwo;
let myNums = [];

function setup() {
  // put setup code here
    createCanvas(600, 600);
    background(0);
    //loadJSON('/flower', gotFlower);
    loadJSON('flowers.json', gotFlowers);
}
function gotFlowers(data){
for(let i=0; i< data.length; i++){
  console.log(data[i]);
}
//draw the flowers (have 4 )
gotFlower(data[0],0,0);
gotFlower(data[1],255,0);
gotFlower(data[2],0,255);
gotFlower(data[3],255,255);
}

function gotFlower(data,offsetX,offsetY){
  console.log(data.drawing);
  noFill();
  stroke(255);
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
