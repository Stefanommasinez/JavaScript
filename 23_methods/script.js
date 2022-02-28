const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

Object.entries(person).forEach(([key, value]) => console.log(`${key}: ${value}`));