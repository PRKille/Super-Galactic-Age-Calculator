export class Astronaut {
  constructor() {
    this.age = 0;
    this.demo = [];
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.expectAge = 0;
  }

  addAge(age) {
    this.age = age;
  }

  ageMerc() {
    let newAge = this.age/.24
    this.mercuryAge = parseFloat(newAge.toFixed(2));
  }
  
  ageVen() {
    let newAge = this.age/.62;
    this.venusAge = parseFloat(newAge.toFixed(2));
  }

  ageMars() {
    let newAge = this.age/1.88;
    this.marsAge = parseFloat(newAge.toFixed(2));
  }

  ageJup() {
    let newAge = this.age/11.86;
    this.jupiterAge = parseFloat(newAge.toFixed(2));
  }

  addDemo(sex, continent) {
    this.demo.push(sex);
    this.demo.push(continent);
  }

  lifeExpect(){
    let demo = this.demo;
    if (demo[0] === "female") {
      if (demo[1] === "NA") {
        this.expectAge = 84;
      } else if (demo[1] === "SA") {
        this.expectAge = 78;
      } else if (demo[1] === "E") {
        this.expectAge = 83;
      } else if (demo[1] === "A") {
        this.expectAge = 75;
      } else if (demo[1] === "AF") {
        this.expectAge = 62;
      } else if (demo[1] === "AU") {
        this.expectAge = 85;
      }
    } else if (demo[0] === "male") {
      if (demo[1] === "NA") {
        this.expectAge = 79;
      } else if (demo[1] === "SA") {
        this.expectAge = 72;
      } else if (demo[1] === "E") {
        this.expectAge = 75;
      } else if (demo[1] === "A") {
        this.expectAge = 65;
      } else if (demo[1] === "AF") {
        this.expectAge = 60;
      } else if (demo[1] === "AU") {
        this.expectAge = 83;
      }
    }
  }

  planetRemain() {
    const {expectAge, mercuryAge, venusAge, marsAge, jupiterAge} = this;
    let earthDeath = expectAge - this.age;
    let mercDeath = parseFloat(((earthDeath/.24)-mercuryAge).toFixed(2));
    let venDeath = parseFloat(((earthDeath/.62)-venusAge).toFixed(2));
    let marsDeath = parseFloat(((earthDeath/1.88)-marsAge).toFixed(2));
    let jupDeath = parseFloat(((earthDeath/11.86)-jupiterAge).toFixed(2));
    let deathArray = [earthDeath, mercDeath,venDeath,marsDeath,jupDeath];
    return deathArray;
  }

  bonusYears() {
    let earthBonus = this.age - this.expectAge;
    let mercBonus = parseFloat((earthBonus/.24).toFixed(2));
    let venBonus = parseFloat((earthBonus/.62).toFixed(2));
    let marsBonus = parseFloat((earthBonus/1.88).toFixed(2));
    let jupBonus = parseFloat((earthBonus/11.86).toFixed(2));
    let bonusArray = [earthBonus,mercBonus,venBonus,marsBonus,jupBonus];
    return bonusArray;
  }
}