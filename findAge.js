function howOld(age,year){

if(year>"2018"){
  var futureAge=age+(year-2018);
  return 'You will be '+futureAge+' in the year '+ year
}
else if((2018-age)>year){
  var beforeAge=(2018-age)-year;
  return 'The year '+ year +' was '+beforeAge+' years before you were born'
}
else if((year-age)<2018){
  var pastAge=(age-(2018-year))
  return 'You were '+pastAge+ ' in the year '+ year
}

}
console.log(howOld(26,2023))
