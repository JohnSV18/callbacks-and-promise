const food = new Promise((resolve, reject) => {
  // **Challenge 1** Resolve your promise with the name of your favorite food. 
  // Do this by calling the `resolve` with an argument.
  setTimeout(() => {
    resolve('Pizza');
  }, 2000);
  
})



// **Challenge 2** Resolve the `food` promise with that `.then()` syntax 
// and print your favorite food to the console. 
food.then((message) => {
  console.log(message);
}).catch((err) => {
  console.log(err)
})