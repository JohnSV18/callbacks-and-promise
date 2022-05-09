function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  // If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
  // resolve the promise with your favorite food for that time. 
    if (timeOfDay === 'breakfast') {
      return Promise.resolve('Pancakes');
    } else if (timeOfDay === 'lunch') {
      return Promise.resolve('Sandwich');
    } else if (timeOfDay === 'dinner') {
      return Promise.resolve('Steak');
    } else {
      return Promise.reject('Im not hungry right now.');
    }
  // If the `timeOfDay` is anything else reject the promise with 
  // the 'message' I'm not hungry right now.  
}


// Call yout function and resolve the promise here! 
whatToEat('lf')
  .then(food => {console.log(food)})
  .catch(err => {console.log(err)});


