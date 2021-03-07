
//let backgroundImg;

var s1 = function( sketch ) {
  sketch.preload = function() {
  //backgroundImg = loadImage('assets/images/background.png');
}

sketch.setup = function() {
  let canvas1 = sketch.createCanvas(800, 800, sketch.WEBGL);
    canvas1.position(0,0);
}

  sketch.draw = function() {
    sketch.background(100);
  }
};

new p5(s1);

var s2 = function( sketch ) {
//let shirtWhite;
//let shirtPlaid;

  sketch.preload = function() {

    let balloonSunny;
    let balloonPJ;
    //shirtWhite = createImg('assets/images/whiteshirt_normal.gif');
    //shirtPlaid = createImg('assets/images/plaidshirt_normal.gif');
    balloonSunny = sketch.loadModel('assets/3D/balloonone.obj', true);
    balloonPJ = sketch.loadModel('assets/3D/balloontwo.obj', true);
  }

   sketch.setup = function() {
    let canvas2 = sketch.createCanvas(800, 800, sketch.WEBGL);
    canvas2.position(100,0);

    //sketch.shirtWhite.id('shirtOne');
    //sketch.shirtPlaid.id('shirtTwo');
  }

  sketch.draw = function() {
    sketch.background(100);
    sketch.drawBalloon();
  }

  sketch.drawBalloon = function() {
    sketch.background(255, 0);
  
    sketch.ambientLight(60, 60, 60);
    sketch.directionalLight(255, 254, 235, -0.3, 1, -0.8);
  
    sketch.specularMaterial(255, 235);
    sketch.shininess(30);
    sketch.noStroke();
    sketch.translate(-300, -15, 50);

    sketch.push();
    sketch.scale(2);
    //sketch.rotateZ(PI);
    sketch.rotateY(9);
    sketch.rotateX(-0.2);
    //rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    sketch.model(balloonSunny);
    sketch.pop();
  
  
    sketch.translate(510, -30);
    sketch.push();
    sketch.scale(2.3);
    sketch.rotateZ(3.32);
    sketch.rotateY(9.45);
    sketch.rotateX(-0.1);
    //rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    sketch.model(balloonPJ);
    sketch.pop();
  }
};
// create the second instance of p5 and pass in the function for sketch 2
new p5(s2);

