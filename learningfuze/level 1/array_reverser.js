// Build a function that takes in an array and reverses it

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output an array that is in reverse order from the input array
// Example:
// var myArray = ['hello', 45, 'Bob', 'what', '23'];
// arrayReverse(myArray);
// Output - ['23', 'what', 'Bob', 45, 'hello']
// Avoid using pre-built functions that do something similar

var myArray = ['hello', 45, 'Bob', 'what', '23'];

function arrayReverse(myArray){
   var newArray = [];
  for (i=(myArray.length)-1; i>=0; i--){
    newArray.push(myArray[i]); 
  }
  return newArray;
}
console.log(arrayReverse(myArray));