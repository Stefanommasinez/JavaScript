const person = {
  get firstName() {
    return this.name;
  },
  set firstName(firstName) {
    this.name = firstName;
  },
  get lastName() {
    return this.surname;
  },
  set lastName(lastName) {
    this.surname = lastName;
  },
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const john = Object.create(person);
john.firstName = "John"
john.lastName = "Doe"

const simon = Object.create(person);
simon.firstName = "Simon"
simon.lastName = "Collins"

console.log(john.fullName());
console.log(simon.fullName());