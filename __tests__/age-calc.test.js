import {GalacticAge} from '../src/js/age-calc.js';

describe('GalacticAge', () => {
  beforeEach(() => { 
    let galacticAge = new GalacticAge(25);
  });

  test('should create galacticAge object with user input age parameter', () => {
    expect(galacticAge).toEqual({age: 25});
  });

  test('should create GalacticAge method that returns user inputted age in Mercury years.', () => {
    galacticAge.calcAge()
    expect(galacticAge).toEqual({age: 25, mercuryAge: 6});
  });
});