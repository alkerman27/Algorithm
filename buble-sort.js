const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubleSort(arr) {
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
       let temp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(`jay: ${1 + j} `,arr);
    }
    console.log(`intel: ${1 + i} `,arr)
  }
} 

bubleSort(numbers)
console.log(numbers);