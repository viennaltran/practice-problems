// Using the JavaScript language, have the function PrimeTime(num) 
// take the num parameter being passed and return the string true if the parameter is a prime number, 
// otherwise return the string false...

// Input:19

// Output:"true"


// Input:110

// Output:"false"


function PrimeTime (num){
    if (num <= 1) return false;
    else if (num <= 3) return true;
    else if (num % 2 === 0 || num % 3 === 0 || num % 6 ===0){
        return false;      
        }
        return true
  }
  console.log(PrimeTime())