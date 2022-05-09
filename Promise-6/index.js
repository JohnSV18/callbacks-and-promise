// Use your what to eat promise here. 
// Add a finally block on the end so that after every meal you belch! 
// In many cultures it shows you had a satisfying meal! 

// Define the whatToEat function here:
function whatToEat(timeOfDay) {
    if (timeOfDay === 'breakfast') {
      return Promise.resolve('Pancakes');
    } else if (timeOfDay === 'lunch') {
      return Promise.resolve('Sandwich');
    } else if (timeOfDay === 'dinner') {
      return Promise.resolve('Steak');
    } else {
      return Promise.reject('Im not hungry right now.');
    }
}

// Resolve with .then(), .catch(), and .finally() here: 
whatToEat('breakfast')
.then(food => {console.log(food)})
.catch(err => {console.log(err)})
.finally(() => {console.log('Belch!')});

whatToEat('lunch')
.then(food => {console.log(food)})
.catch(err => {console.log(err)})
.finally(() => {console.log('Belch!')});

whatToEat('dinner')
.then(food => {console.log(food)})
.catch(err => {console.log(err)})
.finally(() => {console.log('Belch!')});
// Test all fo the cases

whatToEat('lf')
.then(food => {console.log(food)})
.catch(err => {console.log(err)})
.finally(() => {console.log('Belch!')});
