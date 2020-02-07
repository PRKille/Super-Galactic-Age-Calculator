import { Astronaut } from './../src/sgac.js'

describe('Astronaut', () => {
  let colonist;
  beforeEach(()=>{
    colonist = new Astronaut;
  });

  test("should update age paramater based on user input", ()=>{
    colonist.addAge(20);
    expect(colonist.age).toBe(20);
  });

  test("should determine age on Mercury based on year length of .24 earth years", ()=>{
    colonist.addAge(25)
    colonist.ageMerc();
    expect(colonist.mercuryAge).toBe(104.17)
  });

  test("should determine age on Venus based on year length of .62 earth years", ()=>{
    colonist.addAge(20)
    colonist.ageVen();
    expect(colonist.venusAge).toBe(32.26)
  });

  test("should determine age on Mars based on year length of 1.88 earth years", ()=>{
    colonist.addAge(20)
    colonist.ageMars();
    expect(colonist.marsAge).toBe(10.64)
  });

  test("should determine age on Jupiter based on year length of 11.86 earth years", ()=>{
    colonist.addAge(20)
    colonist.ageJup();
    expect(colonist.jupiterAge).toBe(1.69)
  });
});