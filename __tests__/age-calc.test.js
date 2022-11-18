import {GalacticAge} from '../src/js/age-calc.js';

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() => { 
    galacticAge = new GalacticAge(25, 100);
  });

  test('should create galacticAge object with user input age and life expectancy parameters', () => {
    expect(galacticAge).toEqual({age: 25, lifeExpectancy: 100});
  });
});

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() => { 
    galacticAge = new GalacticAge(25, 100);
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
});

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() => { 
    galacticAge = new GalacticAge(25, 100);
    galacticAge.calcAge();
    galacticAge.calcExpectancy();
  });

  test('should create GalacticAge method that returns how many years user has left to live in Mercury years.', () => {
    expect(galacticAge.mercuryAgeExpect).toEqual(311.08);
  });

  test('should create GalacticAge method that returns how many years user has left to live in Venus years.', () => {
    expect(galacticAge.venusAgeExpect).toEqual(121.67);
  });

  test('should create GalacticAge method that returns how many years user has left to live in Mars years.', () => {
    expect(galacticAge.marsAgeExpect).toEqual(39.85);
  });

  test('should create GalacticAge method that returns how many years user has left to live in Jupiter years.', () => {
    expect(galacticAge.jupiterAgeExpect).toEqual(6.32);
  });

  test('should create GalacticAge method that returns how many years user has left to live in Saturn years.', () => {
    expect(galacticAge.saturnAgeExpect).toEqual(2.54);
  });

  test('should create GalacticAge method that returns how many years user has left to live in Uranus years.', () => {
    expect(galacticAge.uranusAgeExpect).toEqual(0.89);
  });

  test('should create GalacticAge method that returns how many years user has left to live in Neptune years.', () => {
    expect(galacticAge.neptuneAgeExpect).toEqual(0.45);
  });
});

describe('GalacticAge', () => {
  let galacticAge;
  beforeEach(() => { 
    galacticAge = new GalacticAge(70, 60);
    galacticAge.calcAge();
    galacticAge.calcExpectancy();
  });

  test('should create calcExpectancy() method that returns how many years user has lived past their demographic expectancy in Mercury years.', () => {
    expect(galacticAge.mercuryAgeExpect).toEqual(41.48);
  });

  test('should create calcExpectancy() method that returns how many years user has lived past their demographic expectancy in Venus years.', () => {
    expect(galacticAge.venusAgeExpect).toEqual(16.22);
  });

  test('should create calcExpectancy() method that returns how many years user has lived past their demographic expectancy in Mars years.', () => {
    expect(galacticAge.marsAgeExpect).toEqual(5.31);
  });

  test('should create calcExpectancy() method that returns how many years user has lived past their demographic expectancy in Jupiter years.', () => {
    expect(galacticAge.jupiterAgeExpect).toEqual(0.84);
  });
});






