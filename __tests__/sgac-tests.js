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
    colonist.addAge(20)
    colonist.ageMerc();
    expect(colonist.mercuryAge).toBeCloseTo(83.3, 1)
  });
});