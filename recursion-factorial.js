//Write two functions that finds the factorial of any number. One should use recursion, the other should just use a for loop


function findFactorialRecursive(number) {
  //code here
  //base case
  if(number === 2) {
    return 2;
  }
  let answer = number * findFactorialRecursive(number - 1)
  return answer;
}

function findFactorialIterative(number) {
  //code here
  let  answer = 1;
  if(number === 2) {
    answer = 2;
  }
  for(let count = 2; count <= number; count++) {

    answer = answer * count; //can be answer *= i
  }
  return answer;
}

console.log(findFactorialRecursive(2));
console.log(findFactorialIterative(5));