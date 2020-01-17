//https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number)
{
  var sum = 0;
  for ( var x = 1 ; x < number ; x++ )
  if ( (x % 3 == 0) || (x % 5 == 0) || (x % 3 === 0 && x % 5 === 0) )
   { sum = sum + x ; }
  return sum;
}