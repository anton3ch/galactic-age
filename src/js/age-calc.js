export class GalacticAge {
  constructor(age, expectancy) {
    this.age = age;
    this.lifeExpectancy = expectancy;
  }

  calcAge() {
    this.mercuryAge = (this.age * 365 / 88).toFixed(2);
    this.venusAge = (this.age * 365 / 225).toFixed(2);
    this.marsAge = (this.age * 365 / 687).toFixed(2);
    this.jupiterAge = (this.age / 11.86).toFixed(2);
    this.saturnAge = (this.age / 29.5).toFixed(2);
    this.uranusAge = (this.age / 84).toFixed(2);
    this.neptuneAge = (this.age / 165).toFixed(2);
    this.plutoAge = (this.age / 248).toFixed(2);
  }

  calcExpectancy  () {
    this.mercuryAgeExpect = Math.abs(((this.lifeExpectancy - this.age) * 365 / 88).toFixed(2));
  }
}
