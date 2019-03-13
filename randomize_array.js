// Create a function, randomize_list(), that takes an array and ranzomizes the order, 
// without resorting to the use of any pre-existing array methods.

var input_array = 
[5,3,2,5,1]
var new_array = [];
var new_array2 = [];



function randomize_list(input_array){
  
    
 var random_index = Math.floor(Math.random() *5); 
 var random_number=input_array[random_index];    
var index = input_array.indexOf(random_number);
if (index > -1) {
  input_array.splice(index, 1);
}
  new_array.push(random_number);
  
 
  var random_index2 = Math.floor(Math.random() *4);  
  var random_number2=input_array[random_index2];
  var index2 = input_array.indexOf(random_number2);
if (index2 > -1) {
  input_array.splice(index2, 1);
}
  new_array.push(random_number2);

  
  var random_index3 = Math.floor(Math.random() *3);  
  var random_number3=input_array[random_index3];
  var index3 = input_array.indexOf(random_number3);
if (index2 > -1) {
  input_array.splice(index3, 1);
}
  new_array.push(random_number3);


  var random_index4 = Math.floor(Math.random() *2);  
  var random_number4=input_array[random_index4];
  var index4 = input_array.indexOf(random_number4);
if (index4 > -1) {
  input_array.splice(index4, 1);
}
  new_array.push(random_number4);
  

  var random_index5 = Math.floor(Math.random() *1);  
  var random_number5=input_array[random_index5];
  var index5 = input_array.indexOf(random_number5);
if (index5 > -1) {
  input_array.splice(index5, 1);
}
  new_array.push(random_number5);
  return new_array

}

console.log(randomize_list(input_array));