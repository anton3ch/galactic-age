export class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  calcAge() {
    this.mercuryAge = (this.age * 365 / 88).toFixed(2);
    this.venusAge = (this.age * 365 / 225).toFixed(2);
    this.marsAge = (this.age * 365 / 687).toFixed(2);
    this.jupiterAge = (this.age / 11.86).toFixed(2);
    this.saturnAge = (this.age / 29.5).toFixed(2);
    this.uranusAge = (this.age / 84).toFixed(2);
  }
}
