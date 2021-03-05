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

let balloonSunny;

function preload() {
  balloonSunny = loadModel('assets/3D/balloons.obj', true);
  //balloonMtl = loadImage('assets/3D/balloons.mtl');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;


  ambientLight(60, 60, 60);
  pointLight(255, 255, 255);

  push();
  noStroke();
  scale(3);
  ambientMaterial(255);
  rotateZ(PI);
  rotateY(PI);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  model(balloonSunny);
  pop();

}