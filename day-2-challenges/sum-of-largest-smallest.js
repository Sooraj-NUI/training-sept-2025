function findSumOfLargestAndSmallestInArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    console.error("Input must be an array");
    return false;
  }
  if (inputArray.length === 0) {
    console.error("Array cannot be empty");
    return false;
  }

  let smallestNumber = 0;
  let laregestNumber = 0;
  for (let i = 0; i < inputArray.length; i++) {
    for (j = 0; j < inputArray.length - i - 1; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        let swapValue = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = swapValue;
      }
    }
  }
  console.log(inputArray);
  smallestNumber = inputArray[0];
  laregestNumber = inputArray[inputArray.length - 1];
  console.log(smallestNumber, laregestNumber);
  let sumOfLargestAndSmallestNumbers = laregestNumber + smallestNumber;
  return sumOfLargestAndSmallestNumbers;
}
console.log(findSumOfLargestAndSmallestInArray([45, 2, 25, 11, 16]));
