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

  }
  //bonusYears
}