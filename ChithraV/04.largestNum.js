 // Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
    for(let i=0;i<4;i++)
    {
        for(let j=i+1;j<4;j++)
        {
            if(numbers[i]>numbers[j])
            {
                let temp=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=temp;
            }
            
        }
    }
    console.log(numbers[3]);
  }
  
  console.log(findLargestNumber([10, 20, 5, 8])); 
  // Expected Output: 20
