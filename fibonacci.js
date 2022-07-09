//Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 99, 144 ...
//the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2+3

function fibonacciIterative(num) {
  //code here
  let arraySequence = [0,1];

  for(let i = 2; i < num + 1; i++ ) {
    arraySequence.push(arraySequence[i - 2] + arraySequence[i - 1]) 
  }
  return arraySequence[num];
}

console.log(fibonacciIterative(8));

function fibonacciIterativeRecursive(num) {
  //code here
  if(num < 2) {
    return num;
  }
  return fibonacciIterativeRecursive(num - 1) + fibonacciIterativeRecursive(num - 2)
  // let arraySequence = [0, 1]
  // let counter = 0;

  // let sum = arraySequence[counter] + arraySequence[counter + 1]
  // arraySequence.push(sum)
  
  // fibonacciIterativeRecursive(num - 1)
  // return arraySequence;
  
}

console.log(fibonacciIterativeRecursive(5))
