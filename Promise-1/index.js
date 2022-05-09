// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('>>> Success! <<<');
    // resolve('>>> Success! <<<');
    reject("--- Oops ---");
    reject("--- Oops ---");
    reject("--- Oops ---");
    
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved successfully! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
  // When it is rejected, you get a message in the console saying "Promise rejected 😞" and "--- Oops ---"
  // right below that.

// **2)** What happens when you call both `resolve` and `reject`? Test this.
  // When I call both resolve and reject, I get a message in the console saying "Promise resolved successfully! 😀" 
  // because it's coming before the reject.

// **3)** Does the order matter you call resolve and reject matter? Test this.
  // It does matter, because whatever is called first is what is executed.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
  // It will only execute the first one.