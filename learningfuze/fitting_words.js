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

var wordsArr = [
  'cat',
  'catastrophe',
  'attach',
  'orange',
  'maeby',
  'kitten',
  'act',
  'at'
];
function containsLetters(str, arr) {
  var letters = str.split('');
  console.log(letters);

  // ES6 version
  /*
  return wordsArr.filter(word => {
    for (var i = 0; i < letters.length; i++) {
      if (word.indexOf(letters[i]) === -1) {
        // if any given letter is not in the word, get out
        return false;
      }
    }
    // all letters are in the word
    return true;
  });
  */

  // ES5 version
  return wordsArr.filter(function(word) {
    for (var i = 0; i < letters.length; i++) {
      if (word.indexOf(letters[i]) === -1) {
        // if any given letter is not in the word, get out
        return false;
      }
    }
    // all letters are in the word
    return true;
  });
}
console.log(containsLetters('cat', wordsArr)); // should return cat, catastrophe, attach, act
