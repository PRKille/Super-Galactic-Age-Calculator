import { Astronaut } from './../src/sgac.js'

describe('Astronaut', () => {
  let colonist;
  beforeEach(()=> {
    colonist = new Astronaut;
  });

  test("should update age paramater based on user input", ()=> {
    colonist.addAge(20);
    expect(colonist.age).toBe(20);
  });

  test("should determine age on Mercury based on year length of .24 earth years", ()=> {
    colonist.addAge(20);
    colonist.ageMerc();
    expect(colonist.mercuryAge).toBe(83.33)
  });

  test("should determine age on Venus based on year length of .62 earth years", ()=> {
    colonist.addAge(20);
    colonist.ageVen();
    expect(colonist.venusAge).toBe(32.26)
  });

  test("should determine age on Mars based on year length of 1.88 earth years", ()=> {
    colonist.addAge(20);
    colonist.ageMars();
    expect(colonist.marsAge).toBe(10.64)
  });

  test("should determine age on Jupiter based on year length of 11.86 earth years", ()=> {
    colonist.addAge(20);
    colonist.ageJup();
    expect(colonist.jupiterAge).toBe(1.69)
  });

  test("should update demographic information based on user input", ()=> {
    colonist.addDemo("female", "NA");
    expect(colonist.demo).toEqual(["female", "NA"])
  });

  test("should return how many years a user has left to live based on basic demographic information", ()=> { 
    colonist.addAge(20); 
    colonist.addDemo("male", "AF");
    colonist.lifeRemain();
    expect(colonist.expectAge).toBe(40);
  });

  test("should return remaining life in Mercury years", ()=> {
    let tempAge = [];
    colonist.addAge(20);
    colonist.ageMerc();
    colonist.ageVen();
    colonist.ageMars();
    colonist.ageJup();
    colonist.addDemo("male", "AF");
    colonist.lifeRemain();
    tempAge = colonist.planetRemain();
    expect(tempAge).toEqual([83.34,32.26,10.64,1.68]);
  })
});