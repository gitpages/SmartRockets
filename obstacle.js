class Obstacle {
    constructor() {
        this.dim = createVector(208, 25);
        this.posText = createVector(width / 2, height / 2);
        this.pos = createVector(89, 312);

    }

    show() {
        push();
        textFont(font1);
        fill(0, 255, 255);
        textAlign(CENTER, CENTER);
        textSize(35);
        // stroke(0);
        text('BOA_NOITE ', this.posText.x, this.posText.y);
        pop();
        // fill(255, 0, 0);
        // rectMode(CORNER);
        // rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
    }
}