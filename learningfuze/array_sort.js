// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.

// Write a function that takes one parameter
// Parameter 1 - An Array of strings
// The function should output an array containing all the strings from the input array but in alphabetical order
// Example: -var myArray = ['mouse', 'cat', 'dog', 'human'];
// sort(myArray);
// Output - ['cat', 'dog', 'human', 'mouse']
// Try doing this using a Bubble Sort, if you are unsure what that is Click Here

var myArray = ['mouse', 'cat', 'dog', 'human'];


function sortString(str){
  var arr = myArray;
  var tmp;
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      /* if ASCII code greater then swap the elements position*/
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

console.log(sortString(myArray));