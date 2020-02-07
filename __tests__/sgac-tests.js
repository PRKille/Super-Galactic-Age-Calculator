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
});