const a = {
    powerLevel: 99,
    getPower() {
        return this.powerLevel;
    }
}

const getPower = a.getPower;

const b = { powerLevel: 42 };

console.log(getPower());
console.log(getPower.apply(b));
