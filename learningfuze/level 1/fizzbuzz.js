// FizzBuzz
// Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// Write a function that takes no parameters
// The function should output the numbers 1 through 100, following the rules from above

function FrizzBuzz (){

    var array = [];
    
    for (i=0; i<101; i++){
    array.push(i)
        
        for (j=1;j<101; j++){
            if(i===(3*j)){
                array[(3*j)]="Frizz";
            }
            else if (i===(5*j)){
                array[(5*j)]="Buzz";
            }
        }
        for (k=1;k<101; k++){
            if (i===(15*k)){
                array[(15*k)]="FrizzBuzz";   
            }
        }
    }
    array.shift(); 
    return array
}  
    
    console.log(FrizzBuzz())