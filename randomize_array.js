// Create a function, randomize_list(), that takes an array and ranzomizes the order, 
// without resorting to the use of any pre-existing array methods.

var input_array = 
[5,3,2,5,1]
var new_array = [];
 
function randomize_list(input_array){
  
    for (i=(input_array.length);i>=0; i--){
     var random_index = Math.floor(Math.random() *i); 
    var random_number=input_array[random_index];    
   var index = input_array.indexOf(random_number);
   if (index > -1) {
     input_array.splice(index, 1);
   }
     new_array.push(random_number);
      
    }
     new_array.pop();
     return new_array; 
     
   }
   
   console.log(randomize_list(input_array));