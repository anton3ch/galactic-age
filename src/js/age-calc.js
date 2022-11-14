export class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  calcAge() {
    this.mercuryAge = (this.age * 365 / 88).toFixed(2);

  }
}
