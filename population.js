class Population {
    constructor() {
        this.rockets = [];
        this.pop = 100;
        for (let i = 0; i < this.pop; i++) {
            this.rockets[i] = new Rocket();
        }

        this.matingpool = [];
    }

    evaluate() {
        let maxfit = 0;
        for (let i = 0; i < this.pop; i++) {
            this.rockets[i].calcFitness();
            if (this.rockets[i].fitness > maxfit) {
                maxfit = this.rockets[i].fitness;
            }
        }

        for (let i = 0; i < this.pop; i++) {
            this.rockets[i].fitness /= maxfit;
        }

        this.matingpool = [];
        for (let i = 0; i < this.pop; i++) {
            let n = this.rockets[i].fitness * 100;
            for (let j = 0; j < n; j++) {
                this.matingpool.push(this.rockets[i]);
            }
        }
    }

    nSelection() {
        let newRockets = [];
        for (let i = 0; i < this.rockets.length; i++) {
            let parentA = random(this.matingpool).brain;
            let parentB = random(this.matingpool).brain;
            let child = parentA.crossOver(parentB);
            child.mutation();
            newRockets[i] = new Rocket(child);
        }
        this.rockets = newRockets;
    }

    run() {
        for (let i = 0; i < this.pop; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}