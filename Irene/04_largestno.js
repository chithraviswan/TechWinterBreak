// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
    // Write code here
    let largest = numbers[0];
    for(let i=1;i<=numbers.length;i++)
    {
        if(largest<numbers[i])
            largest=numbers[i];
    }
    return largest;
  }
  
  console.log(findLargestNumber([10, 20, 5, 8])); 
  // Expected Output: 20
