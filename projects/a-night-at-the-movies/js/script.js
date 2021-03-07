/***************
                                ___       _ _                                       _                    
 ___ _   _ _ __  _ __  _   _   ( _ )     (_|_)_ __ ___  _ __ ___  _   _       _ __ (_) ___ _ __ _ __ ___ 
/ __| | | | '_ \| '_ \| | | |  / _ \/\   | | | '_ ` _ \| '_ ` _ \| | | |_____| '_ \| |/ _ \ '__| '__/ _ \
\__ \ |_| | | | | | | | |_| | | (_>  <   | | | | | | | | | | | | | |_| |_____| |_) | |  __/ |  | | |  __/
|___/\__,_|_| |_|_| |_|\__, |  \___/\/  _/ |_|_| |_| |_|_| |_| |_|\__, |     | .__/|_|\___|_|  |_|  \___|
                       |___/           |__/                       |___/      |_|                         
Sunny and Jimmy-Pierre
sam bordeleau

Sunny and Jimmy-Pierre is a reinterpretation of David Lynch's notoriously infamous 
(and oh so sadly unpopular) short movie titled "Pierre and Sonny Jim" taking form as a web-based game.
****************/

//let shirtPlaid, shirtWhite;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let balloonSunny;
let balloonPJ;
//let shirtWhite;

function preload() {
  shirtWhite = createImg('assets/images/whiteshirt_normal.gif');
  shirtPlaid = createImg('assets/images/plaidshirt_normal.gif');
  balloonSunny = loadModel('assets/3D/balloonone.obj', true);
  balloonPJ = loadModel('assets/3D/balloontwo.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  shirtWhite.id('shirtOne');
  shirtPlaid.id('shirtTwo');
}

function draw() {
  background(255, 0);

  drawBalloon();
}

function drawBalloon() {
  clear();
  background(255, 0);

  ambientLight(60, 60, 60);
  directionalLight(255, 254, 235, -0.3, 1, -0.8);

  specularMaterial(255, 235);
  shininess(30);
  noStroke();
  translate(-300, -15);
  push();
  scale(2);
  rotateZ(PI);
  rotateY(9);
  rotateX(-0.2);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  model(balloonSunny);
  pop();


  translate(510, -30);
  push();
  scale(2.3);
  rotateZ(3.32);
  rotateY(9.45);
  rotateX(-0.1);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  model(balloonPJ);
  pop();
}

/*
function drawShirts() {
  push();
  rotateZ(PI);
  rotateY(PI);
  texture(shirtWhite, windowHalfX, windowHalfY);
  noStroke();
  plane(200, 200);
  pop();
}*/
