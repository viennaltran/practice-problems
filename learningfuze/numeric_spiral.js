// Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.

// Write a function that takes one parameter
// Parameter 1 - A number
// The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
// Example:
// fibSequence(12);
// Output - 0 1 1 2 3 5 8 13 21 34 55 89


var output = [];
function fibonacci (number){
  if (number>3){
    var i =0;
    output.push(i);
    output.push(i+1);
  
  for (i=0; i<number-2; i++){
    output.push(output[i]+output[i+1])
  }
  return output
  }
  else if (number === 2){
    var j =0;
    output.push(j);
    output.push(j+1);
    return output
  }
  else if (number === 1){
    var k =0;
    output.push(k);
    return output
  }
  else if (number === 0 ){
    console.log("no sequence"); 
  }else{
    console.log("not a whole number");
  }
}
console.log(fibonacci(12))