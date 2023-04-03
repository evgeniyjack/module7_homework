const checkProperty = (str, obj) => {
  return obj.hasOwnProperty(str);
}

const person = {
  name: 'John',
  age: 30,
  job: 'developer'
};

console.log(checkProperty('name', person)); // true
console.log(checkProperty('salary', person)); // false