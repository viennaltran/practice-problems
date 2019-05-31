// Build a function that takes in a string and an array of strings. The function should output an 
// array of strings that contain the same letters as the single input string.

var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
var arrayOfMatchingWords = [];

 function fittingWords(string, arrayOfStrings){
  
    for(var i = 0; i < arrayOfStrings.length; i++){
       if(myArray[i].includes(string[0])){
         arrayOfMatchingWords.push(myArray[i])
         
           for(var x = 0; x < string.length; x++){
             
             for(var y = 0; y < arrayOfMatchingWords.length; y++){
         
          if(!arrayOfMatchingWords[y].includes(string[x])){
            arrayOfMatchingWords.splice(y,1); 

          }       
       }    
    } 
  }
}
return arrayOfMatchingWords;
}

fittingWords('cat', myArray);
