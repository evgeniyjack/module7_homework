const printOwnProperties = (obj) => {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`${prop}: ${obj[prop]}`);
      }
    }
  }
  
  // пример использования
  const obj = {
    name: 'John',
    age: 30,
    job: 'developer'
  };
  
  printOwnProperties(obj); // выводит "name: John", "age: 30", "job: developer"