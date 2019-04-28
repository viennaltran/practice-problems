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

function pigLatin (string){
  
  var ay = "ay"
  var newString=string.split(" ");
  var firstLetter=[];
//    console.log(newString)
   
  for(i=0; i<newString.length; i++){
  var word = newString[i].split('');
   console.log(newString[i].split(''))
   
   for (j=0; j<word.length; j++){
     if(word[j]==='a'||word[j]==='e'||word[j]==='i'||word[j]==='o'||word[j]==='u'){
       firstLetter.push(word[j-1])
      firstLetter = firstLetter[0]
     }
   }
   
 return firstLetter;

    
  }

}
console.log(pigLatin(myString))