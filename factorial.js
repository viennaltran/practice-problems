function factorial(num){

    var result=[];
    var total=1;
    
    for(var i=0; i<num; i++){
    result.push(num-i);
    total=total*(result[i])
     
   }
  
  return total
      
  } 
  console.log(factorial(4))