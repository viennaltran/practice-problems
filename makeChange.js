var newArray = [];

function makeChange (amount, change){
  
  var i=0;
  while(amount>0){
    
    while(amount >= change[i]){
      amount = amount - change[i];
      newArray.push(change[i])
    } 
  i++;
  } 
  return newArray
}
  console.log(makeChange(15,[25,10,5,3,1]))

