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

const s1 = ( sketch ) => {
  /*
  let shirtPlaid, shirtWhite;
  let windowHalfX = 800 / 2;
  let windowHalfY = 800 / 2;*/

  let backgroundImg;
  
  /*
  sketch.preload = () => {
   // backgroundImg = sketch.loadImage('assets/images/background.png');
  };*/

  sketch.setup = () => {
    sketch.createCanvas(2000, 2000);

    backgroundImg = sketch.loadImage('assets/images/background.png');
    backgroundImg.sketch.style('z-index', '0');
    /*
    shirtWhite = createSprite(windowHalfX * 1.5, windowHalfY * 1.60);
    shirtWhite.sketch.addAnimation('normal' , 'assets/sprites/shirt1.png' , 'assets/sprites/shirt4.png');
    shirtWhite.sketch.addAnimation('angry' , 'assets/sprites/shirt1.png' , 'assets/sprites/shirt2.png');

    shirtPlaid = sketch.createSprite(windowHalfX / 1.8, windowHalfY * 1.60);
    shirtPlaid.sketch.addAnimation('normal' , 'assets/sprites/wshirt1.png' , 'assets/sprites/wshirt4.png');
    shirtPlaid.sketch.addAnimation('angry' , 'assets/sprites/wshirt1.png' , 'assets/sprites/wshirt2.png');

    shirtPlaid.sketch.mouseActive, shirtPlaid.sketch.mouseActive = true;*/
  };

  sketch.draw = () => {
    sketch.background(backgroundImg);

    // animation(shirtWhite, windowHalfX , windowHalfY);
 /*
  -- plaid shirt on mouse over --
     if(shirtPlaid.sketch.mouseIsOver){
        shirtPlaid.sketch.changeAnimation('angry')
   }
     else {
        shirtPlaid.sketch.changeAnimation('normal')
   }
 
 // -- white shirt on mouse over --
     if(shirtWhite.sketch.mouseIsOver){
        shirtWhite.sketch.changeAnimation('angry')
   }
     else {
        shirtWhite.sketch.changeAnimation('normal')
   };
 
     drawSprites();*/
  };
};

var myp5 = new p5(s1, document.getElementById('twoDobj'));

const s2 = ( sketch ) => {

  let balloonSunny;

  sketch.preload = () => {
      balloonSunny = sketch.loadModel('assets/3D/balloons.obj', true);
      //balloonMtl = loadImage('assets/3D/balloons.mtl');
    };

    sketch.setup = () => {
      sketch.createCanvas(1000, 1000, sketch.WEBGL);
      balloonSunny.sketch.style('z-index', '2');
    };

    sketch.draw = () => {
      sketch.clear();
      sketch.background(0, 0);

      //let locX = mouseX - height / 2;
      //let locY = mouseY - width / 2;

      sketch.ambientLight(60, 60, 60);
      sketch.pointLight(255, 255, 255);

      sketch.push();
      sketch.noStroke();
      sketch.scale(3);
      sketch.ambientMaterial(255);
      //sketch.rotateZ(PI);
      //sketch.rotateY(PI);
      //rotateX(frameCount * 0.01);
      //rotateY(frameCount * 0.01);
      sketch.model(balloonSunny);
      sketch.pop();
    };
  };

var myp5 = new p5(s2, document.getElementById('threeDobj'));


