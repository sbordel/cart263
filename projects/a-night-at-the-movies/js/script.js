/***************
                                ___       _ _                                       _                    
 ___ _   _ _ __  _ __  _   _   ( _ )     (_|_)_ __ ___  _ __ ___  _   _       _ __ (_) ___ _ __ _ __ ___ 
/ __| | | | '_ \| '_ \| | | |  / _ \/\   | | | '_ ` _ \| '_ ` _ \| | | |_____| '_ \| |/ _ \ '__| '__/ _ \
\__ \ |_| | | | | | | | |_| | | (_>  <   | | | | | | | | | | | | | |_| |_____| |_) | |  __/ |  | | |  __/
|___/\__,_|_| |_|_| |_|\__, |  \___/\/  _/ |_|_| |_| |_|_| |_| |_|\__, |     | .__/|_|\___|_|  |_|  \___|
                       |___/           |__/                       |___/      |_|                         
Sunny and Jimmy-Pierre
sam bordeleau

"Sunny and Jimmy-Pierre" is a reinterpretation of David Lynch's infamous 
(and so sadly unpopular) short movie titled "Pierre and Sonny Jim" taking form as a web-based game.
****************/

//let windowHalfX = window.innerWidth / 2;
//let windowHalfY = window.innerHeight / 2;

let balloonSunny;
let balloonSunnyX = -160; 
let balloonSunnyY = -20;

let balloonJP;
let balloonJPX = 105;
let balloonJPY = -35;

let shirtWhite;
let shirtPlaid;

let boundaryOne;
let boundaryTwo;

let sY = 0;
let sZ = 0;
let jY = 0;
let jZ = 0;


function preload() {

  // wiggling dress shirt gifs
  shirtWhite = createImg('assets/images/whiteshirt_normal.gif');
  shirtWhite.id('shirtOne');
  shirtWhite.style('opacity','0');

  shirtPlaid = createImg('assets/images/plaidshirt_normal.gif');
  shirtPlaid.id('shirtTwo');
  shirtPlaid.style('opacity','0');

  // 3D balloon head models
  balloonSunny = loadModel('assets/3D/balloonone.obj', true);

  //balloonJP = createImg('assets/images/balloontwo.png');
  balloonJP = loadModel('assets/3D/balloontwo.obj', true);

  // background music and screaming sound FX
  soundFormats('mp3', 'ogg');
  bgSound = loadSound('assets/sound/ambience_sound');
  sunnyFX = loadSound('assets/sound/scream04');
  jpFX = loadSound('assets/sound/scream05');

  boundaryOne = select('#rectOne');
  boundaryTwo = select('#rectTwo');

  boundaryOne.mousePressed(sonnyEvent);
  boundaryTwo.mousePressed(jpEvent);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  bgSound.loop();
}

function draw() {
  shirtWhite.style('opacity','1');
  shirtPlaid.style('opacity','1');

  drawBalloon();
}

function drawBalloon() {
  background(255, 0);

  //let ranY = random(60);
  
  ambientLight(60, 60, 60);
  directionalLight(255, 250, 235, -0.3, 1, -0.8);
  specularMaterial(255, 245);
  shininess(30);
  noStroke();

  // Sunny balloon
  push();
  scale(2);
  translate(balloonSunnyX, balloonSunnyY, 0);
  rotateZ(PI+sZ);
  rotateY(9+sY);
  rotateX(-0.35);
  sZ = 0;
  sY = 0;
  model(balloonSunny);
  pop();

  // Jimmy-Pierre balloon 
  push();
  scale(2.3);
  translate(balloonJPX, balloonJPY, 0);
  rotateZ(3.22+jZ);
  rotateY(9.60+jY);
  rotateX(-0.2);
  model(balloonJP);
  pop();

  jZ = 0;
  jY = 0;
}

function sonnyEvent() {
  sunnyFX.play();

  for (let i = 0; i < 20; i++) {
  var ranZ = random(-5, 5);
  var ranY = random(-5, 5);
  var ranB = Math.random() < 0.5

    if (ranB) {
      sZ = ranZ;
    }
    else {
      sY = ranY;
    }
  }
}

function jpEvent() {
  jpFX.play();

  var ranZ = random(-5, 5);
  var ranY = random(-5, 5);
  var ranB = Math.random() < 0.5

  if (ranB) {
    jZ = ranZ;
  }
  else {
    jY = ranY;
  }

}

