export class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  calcAge() {
    this.mercuryAge = (this.age * 365 / 88).toFixed(2);
    this.venusAge = (this.age * 365 / 225).toFixed(2);
    this.marsAge = (this.age * 365 / 687).toFixed(2);
  }
}
