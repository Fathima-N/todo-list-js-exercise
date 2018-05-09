class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`
  }


}

class Student extends Person {

  enroll(cohort) {
    this.cohort = cohort;
  }

  bio() { 
    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
  }
}


class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  goOffShift() {
    this.onShift = false;
  }
}

student1 = new Student("Celine", "Blows bubbles");
student1.enroll("april 09")
console.log(student1.bio())

mentor1 = new Mentor("Bob", "Plays drums");
mentor1.goOffShift()
console.log(mentor1)

