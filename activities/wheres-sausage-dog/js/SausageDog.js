class SausageDog extends Animal {
// added "extends Animal" to define SausageDog class as child of Animal
  constructor(x, y, image) {
//super calls Animal's constructor values
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
  }

  update() {
    super.update();

    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
        this.found = true;
    }
  }
}
