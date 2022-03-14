const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let [property, value] of Object.entries(person)) {
  console.log(`${property}: ${value}`);
}