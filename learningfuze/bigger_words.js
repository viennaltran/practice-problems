// Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.

// Write a function that takes two parameters
// Parameter 1 - A string
// Parameter 2 - An array of strings
// The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
// Example:
// var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
// biggerWords('whales', myArray);
// Output - ['reptile', 'mammoth', 'turtles']

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
var newArray = [];

function biggerWords (string, array){
  for (i=0; i<array.length; i++){
    if (string.length<array[i].length){
      newArray.push(array[i])
    }
  }
  return newArray
  
}
console.log(biggerWords('whales', myArray));