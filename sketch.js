let population;
let obs;
let target;

let maxSteps = 300;
let steps = 0;
let genNum = 1;

let death = 0;

let font1;

function preload() {
    font1 = loadFont('fonts/Minecraft.ttf');
}

function drawInfo() {
    textFont(font1);
    fill(255, 255, 255);
    textAlign(CENTER, CENTER);
    textSize(20);
    noStroke();
    text('Generation: ' + genNum, 300, 20);
    text('Steps: ' + steps, 300, 40);
    text('Population: ' + population.pop, 90, 20);
    text('KIA: ' + death, 90, 40);


}


function setup() {
    createCanvas(400, 650);
    population = new Population();
    target = new Target();
    obs = new Obstacle();
}

function draw() {
    background(0);
    target.show();
    obs.show();
    population.run();
    steps++;
    if (steps == maxSteps) {
        population.evaluate();
        population.nSelection();
        steps = 0;
        genNum++;
        death = 0;
    }


    drawInfo();
}