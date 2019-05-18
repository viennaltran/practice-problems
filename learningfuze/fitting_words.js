// Build a function that takes in a string and an array of strings. The function should output an 
// array of strings that contain the same letters as the single input string.

var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
var newArray = [];
var newArray2 = [];
var newArray3 = [];

function fittingWords (string,array){
  var letter=string.split("");
  
  for(i=0; i<myArray.length; i++){
    
  
  if(myArray[i].includes("c")){
    newArray.push(myArray[i]);
    
    if(myArray[i].includes("a")){
      newArray2.push(myArray[i]);
      
      if(myArray[i].includes("t")){
        newArray3.push(myArray[i]);
      }
    }
  }else{
    console.log(false);
  }
 }
    
  return newArray3
}
console.log(fittingWords('cat', myArray));