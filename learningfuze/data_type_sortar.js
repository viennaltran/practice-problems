
// Build a function that sorts an array into a multidimensional array grouped by data type

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output a multidimensional array grouped by data type
// Example:
// var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
// groupArray(myArray);
// Output - [['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(myArray){
  var stringArray = [];
  var numberArray= [];
  var booleanArray = [];
  var newArray= [];
  
 for (i=0; i<3; i++){ 
  
  for (i=0; i<myArray.length; i++){
    if(typeof myArray[i]==="string"){
     stringArray.push(myArray[i]);

    }
    else if(typeof myArray[i] === "number"){
      numberArray.push(myArray[i]);

    }
    else if (typeof myArray[i] === "boolean"){
     booleanArray.push(myArray[i]);

    } 
  }
   newArray.push(stringArray);
   newArray.push(numberArray);
   newArray.push(booleanArray);
   }
  return newArray;
}
console.log(groupArray(myArray))