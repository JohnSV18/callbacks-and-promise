function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') { 
        resolve('hello ' + name);
      } else {
        reject('Name must be a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}


// Above we have two functions that returns promises. 
// These are greet and uppercaser. 
// Notice how we chain these promises together. The 
// Result of one is then passed to the next. 

greet('John') // Returns a Promise
.then(str => uppercaser(7))  // Upper case the results from greet() Returns a Promise
.then(str => console.log(str)) // Log the results of uppercaser()
.catch(err => console.log(err)) // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens? 
// I get can error message that says "Name just be a string!"

// Challenge: get uppercaser() to fail by passing a non string value
// What happens? 
// I get can error message that says "Argument to uppercaser must be string"

// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?
// The .catch() will catch any error that is thrown in the chain. Since it is chained the .then() will happen in it's order but the .catch()
// is there for any moment the error needs to be caught and handled.