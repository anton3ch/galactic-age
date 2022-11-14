import {GalacticAge} from '../src/js/age-calc.js';

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() => { 
    galacticAge = new GalacticAge(25, 100);
  });

  test('should create galacticAge object with user input age and life expectancy parameters', () => {
    expect(galacticAge).toEqual({age: 25, lifExpectancy: 100});
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

  test('should calculate user inputted age in Saturn years.', () => {
    expect(galacticAge.saturnAge).toEqual("0.85");
  });

  test('should calculate user inputted age in Uranus years.', () => {
    expect(galacticAge.uranusAge).toEqual("0.30");
  });

  test('should calculate user inputted age in Neptune years.', () => {
    expect(galacticAge.neptuneAge).toEqual("0.15");
  });

  test('should calculate user inputted age in Pluto years.', () => {
    expect(galacticAge.plutoAge).toEqual("0.10");
  });
});