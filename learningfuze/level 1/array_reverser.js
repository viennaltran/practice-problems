// Build a function that takes in an array and reverses it

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output an array that is in reverse order from the input array
// Example:
// var myArray = ['hello', 45, 'Bob', 'what', '23'];
// arrayReverse(myArray);
// Output - ['23', 'what', 'Bob', 45, 'hello']
// Avoid using pre-built functions that do something similar

var myString = "Hello my name is Stu"

function translate (string){
  
  var ay = "ay"
  var newString=string.split(" ");
  var firstLetter=[];
  var pigLatin = [];
  var concat=[];

   
  for(i=0; i<newString.length; i++){
  var word = newString[i].split('');

      firstLetter.push(word[0].concat(ay));
       word.splice(0,1);
    var combined = word.join();
    var noComma = combined.replace(/,/g,"");
    pigLatin.push(noComma)
    
     }
    
   for (j=0; j<pigLatin.length; j++){
    concat.push(pigLatin[j]+firstLetter[j]);
                                                      
    }
   return concat;
}
console.log(translate(myString))