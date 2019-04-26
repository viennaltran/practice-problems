function reverse (string) {
    var newString = string.split('').reverse().join('');
    return newString;
   }
   console.log(reverse("vienna"));

//    palindrome check function
function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
  }
  
  console.log(checkPalindrome("racecar"));