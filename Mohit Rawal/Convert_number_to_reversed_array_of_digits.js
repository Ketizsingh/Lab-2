//https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
var digit=[],que
  while(n>0)
  {
  digit.push(n%10);
  n=Math.floor(n/10);
  }
return digit;
}