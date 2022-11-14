import {GalacticAge} from '../src/js/age-calc.js';

describe('GalacticAge', () => {
  test('should create galacticAge object with user input age parameter', () => {
    let galacticAge = new GalacticAge(25);
    expect(galacticAge).toEqual({age: 25});
    
  });
});