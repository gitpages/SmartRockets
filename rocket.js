class Rocket {
    constructor(brain) {
        this.dim = 5;
        this.pos = createVector(width / 2, height - this.dim * 6);
        // this.vel = p5.Vector.random2D();
        this.vel = createVector(0, 0);
        this.acel = createVector();
        if (brain) {
            this.brain = brain;
        } else {
            this.brain = new Brain();
        }
        this.fitness = 0;
    }

    appForce(force) {
        this.acel.add(force);
    }

    reachedGoal() {
        // let d = dist(this.pos.x, this.pos.y, target.pos.x, target.pos.y);
        if (this.pos.y < target.pos.y + this.dim * 3 && this.pos.x > target.pos.x - this.dim && this.pos.x < target.pos.x + this.dim) {
            this.pos = target.pos.copy();
            return true;
        } else {
            return false
        }
    }

    dead() {
        if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
            if (frameCount % 20 == 0) {
                death++;
            }
            return true;
        } else if (this.pos.x > obs.pos.x && this.pos.x < obs.pos.x + obs.dim.x && this.pos.y > obs.pos.y && this.pos.y < obs.pos.y + obs.dim.y) {

            return true;
        } else {
            return false;
        }
    }

    update() {
        this.appForce(this.brain.genes[steps]);
        if (!this.reachedGoal() && !this.dead()) {
            this.vel.add(this.acel);
            this.pos.add(this.vel);
            this.acel.mult(0);
        }
    }

    calcFitness() {
        //ver funcao code bullet e otimizar essa.
        //adicionar if chegou no target fitness = tal
        //adicionar if nao chegou fitness = tal2
        let d = dist(this.pos.x, this.pos.y, target.pos.x, target.pos.y);
        this.fitness = map(d, 0, width, width, 0);
        if (this.reachedGoal()) {
            this.fitness *= 10;
        }
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading());
        stroke(0);
        ellipseMode(CENTER);
        ellipse(0, 0, this.dim * 2, this.dim * 2);
        pop();
    }
}