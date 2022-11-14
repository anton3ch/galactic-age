import {GalacticAge} from '../src/js/age-calc.js';

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() => { 
    galacticAge = new GalacticAge(25);
  });

  test('should create galacticAge object with user input age parameter', () => {
    expect(galacticAge).toEqual({age: 25});
  });
});

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() => { 
    galacticAge = new GalacticAge(25);
    galacticAge.calcAge();
  });

  test('should create GalacticAge method that returns user inputted age in Mercury years.', () => {
    expect(galacticAge.mercuryAge).toEqual("103.69");
  });

  test('should calculate user inputted age in Venus years.', () => {
    expect(galacticAge.venusAge).toEqual("40.56");
  });

  test('should calculate user inputted age in Mars years.', () => {
    expect(galacticAge.marsAge).toEqual("13.28");
  });

  test('should calculate user inputted age in Jupiter years.', () => {
    expect(galacticAge.jupiterAge).toEqual("2.11");
  });
});