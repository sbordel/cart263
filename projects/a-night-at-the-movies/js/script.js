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

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let balloonSunny;
let balloonJP;
let backgroundImg;
let shirtWhite;
let shirtPlaid;

function preload() {
  shirtWhite = createImg('assets/images/whiteshirt_normal.gif');
  shirtWhite.id('shirtOne');
  shirtWhite.style('opacity','0');

  shirtPlaid = createImg('assets/images/plaidshirt_normal.gif');
  shirtPlaid.id('shirtTwo');
  shirtPlaid.style('opacity','0');

  balloonSunny = loadModel('assets/3D/balloonone.obj', true);
  balloonJP = loadModel('assets/3D/balloontwo.obj', true);
  //bgSound = loadSound('assets/sound/ambience_sound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //bgSound.loop();
}

function draw() {
  drawBalloon();
  shirtWhite.style('opacity','1');
  shirtPlaid.style('opacity','1');
}

function drawBalloon() {
  background(255, 0);
  
  ambientLight(60, 60, 60);
  directionalLight(255, 250, 235, -0.3, 1, -0.8);
  specularMaterial(255, 245);
  shininess(30);
  noStroke();

  push();
  scale(2);
  translate(-160, -20, 0)
  rotateZ(PI);
  rotateY(9);
  rotateX(-0.35);
  model(balloonSunny);
  pop();

  push();
  scale(2.3);
  translate(105, -35, 0)
  rotateZ(3.22);
  rotateY(9.60);
  rotateX(-0.2);
  model(balloonJP);
  pop();
}

