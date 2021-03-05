let shirtPlaid, shirtWhite;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function preload() {
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    backgroundImg = loadImage('assets/images/background.png')

    shirtWhite = createSprite(windowHalfX * 1.5, windowHalfY * 1.5);
    shirtWhite.addAnimation('normal' , 'assets/sprites/shirt1.png' , 'assets/sprites/shirt4.png');
    shirtWhite.addAnimation('angry' , 'assets/sprites/shirt1.png' , 'assets/sprites/shirt2.png');

    shirtPlaid = createSprite(windowHalfX / 2, windowHalfY * 1.5);
    shirtPlaid.addAnimation('normal' , 'assets/sprites/wshirt1.png' , 'assets/sprites/wshirt4.png');
    shirtPlaid.addAnimation('angry' , 'assets/sprites/wshirt1.png' , 'assets/sprites/wshirt2.png');

    shirtPlaid.mouseActive, shirtPlaid.mouseActive = true;
}

function draw() {
    background(backgroundImg);

   // animation(shirtWhite, windowHalfX , windowHalfY);

// -- plaid shirt on mouse over --
    if(shirtPlaid.mouseIsOver){
       shirtPlaid.changeAnimation('angry')
  }
    else {
       shirtPlaid.changeAnimation('normal')
  }

// -- white shirt on mouse over --
    if(shirtWhite.mouseIsOver){
       shirtWhite.changeAnimation('angry')
  }
    else {
       shirtWhite.changeAnimation('normal')
  };

    drawSprites();
}
