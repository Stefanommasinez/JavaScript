function getKeys(obj) {
  const keys = [];
  for (const prop in person) {
    keys.push(prop);
  }
  return keys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);