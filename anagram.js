var newArray =[];

function anagram (string1, string2){
 
  if(string1.length===string2.length){
    for(i=0; i<string1.length; i++){
      if(string1.includes(string2[i])){
        newArray.push(string2[i]);
        if(string1.length === newArray.length){
          return true
        }
      }
      else{
        return false
      }
    }
  }
  else{
    return false
  }
 
 }
  
console.log(anagram ("abccd","dcbca"))