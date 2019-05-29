// Build a function that takes in a string and an array of strings. The function should output an 
// array of strings that contain the same letters as the single input string.

var myString= "cat";
var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
var newArray = [];
var newArray2 = [];
var newArray3 = [];

function fittingWords (string,array){
    var letter=string.split("");
    
    for(i=0; i<array.length; i++){
    
    if(myArray[i].includes(letter[0])){
      newArray.push(array[i]);
      
      if(myArray[i].includes(letter[1])){
        newArray2.push(array[i]);
        
        if(myArray[i].includes(letter[2])){
          newArray3.push(array[i]);
        }
      }
    }else{
      console.log(false);
    }
   }
      
    return newArray3
  }
  console.log(fittingWords(myString, myArray));