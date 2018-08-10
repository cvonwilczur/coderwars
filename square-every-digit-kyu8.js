// My Solution, kyu 8, Square Every Digit

function squareDigits(num){
  // code must return a squared version of every digit in a number,
  // so each digit must be multiplied against itself
  // step 1 - create a variable to store the number as a string
  let stringedNum = String(num);
  // step 2 - create another variable to store the entry string
  let squaredNum = '';
  // step 3 - create a loop based on the length of the string
  for(i=0; i < stringedNum.length; i++){
  // step 4 - in the loop, pop each char of the string and convert it to a num
    let poppedNum = Number(stringedNum.slice(i, i+1))
    // step 5 - multiply that num against itself, convert it to a string and then add it to the empty string
    poppedNum *= poppedNum
    // step 6 - add the string to the squaredNum variable
    squaredNum = squaredNum.concat(String(poppedNum));
   }
   // step 7 - return the final variable as a number
   return Number(squaredNum);
}


// Top solution:

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}
