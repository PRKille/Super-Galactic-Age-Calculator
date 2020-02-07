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

  lifeRemain(){
    let demo = this.demo;
    if (demo[0] === "female") {
      if (demo[1] === "NA") {
        this.expectAge = 84 - this.age;
      } else if (demo[1] === "SA") {
        this.expectAge = 78 - this.age;
      } else if (demo[1] === "E") {
        this.expectAge = 83 - this.age;
      } else if (demo[1] === "A") {
        this.expectAge = 75 - this.age;
      } else if (demo[1] === "AF") {
        this.expectAge = 62 - this.age;
      } else if (demo[1] === "AU") {
        this.expectAge = 85 - this.age;
      }
    } else if (demo[0] === "male") {
      if (demo[1] === "NA") {
        this.expectAge = 79 - this.age;
      } else if (demo[1] === "SA") {
        this.expectAge = 72 - this.age;
      } else if (demo[1] === "E") {
        this.expectAge = 75 - this.age;
      } else if (demo[1] === "A") {
        this.expectAge = 65 - this.age;
      } else if (demo[1] === "AF") {
        this.expectAge = 60 - this.age;
      } else if (demo[1] === "AU") {
        this.expectAge = 83 - this.age;
      }
    }
  }

  planetRemain() {
    return [];
  }
  //bonusYears
}