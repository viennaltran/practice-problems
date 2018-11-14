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

  //answer from online

  function isPrime(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;          
    }
    return  true;
  }


function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));