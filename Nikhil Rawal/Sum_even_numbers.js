//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

function sumEvenNumbers(input) 
{
 var num = 0;
 for (var x = 0 ; x < input.length ; ++x)
   if ( input [x] % 2 == 0 )
     num = num + input[x] ;
  return num;
}