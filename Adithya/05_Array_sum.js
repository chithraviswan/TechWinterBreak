function calculateSum(numbers) {
    // Write code here
    let sum = 0;
    for(let i = 0;i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
  }
  
  console.log(calculateSum([1, 2, 3, 4, 5])); 
  // Expected Output: 15
