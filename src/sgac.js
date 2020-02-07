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
    this.mercuryAge = this.age/.24;
  }
  
  ageVen(){
    
  }
  //ageMars
  //ageJup
  //lifeRemain
  //bonusYears
}