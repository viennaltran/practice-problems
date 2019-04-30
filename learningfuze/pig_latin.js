// Build a function that will translate text into "Pig Latin" Take the first consonant 
// and move it to the end of a word and then affix "ay" to the end of that word."

// Write a function that takes one parameter
// Parameter 1 - A string
// The function should output your input string translated into Pig Latin
// Example:
// var myString = "Hello my name is Stu"
// `translate(myString);
// Output - "ellohay ymay ameya siay tusay"

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