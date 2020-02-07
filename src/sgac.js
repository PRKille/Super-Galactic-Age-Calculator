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

  addAge(age){
    this.age = age;
  }

  ageMerc(){
    let newAge = this.age/.24
    this.mercuryAge = parseFloat(newAge.toFixed(2));
  }
  
  ageVen(){
    let newAge = this.age/.62;
    this.venusAge = parseFloat(newAge.toFixed(2));
  }

  ageMars(){
    
  }
  //ageJup
  //lifeRemain
  //bonusYears
}