function isDivisibleInRange(inputArray, dividingNumber) {
  if (!Array.isArray(inputArray)) {
    throw new Error("First argument must be an array");
  }
  if (inputArray.length === 0) {
    return false;
  }
  if (dividingNumber === 0) {
    return false;
  }

  let firstNumber = 0;
  let lastNumber = 0;
  console.log(inputArray);
  if (inputArray.length === 1) {
    return dividingNumber % inputArray[0] === 0;
  }
  if (inputArray.length > 1) {
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
    firstNumber = inputArray[0];
    lastNumber = inputArray[inputArray.length - 1];
    console.log(firstNumber, lastNumber);
    for (let i = firstNumber; i <= lastNumber; i++) {
      console.log(i);
      if (dividingNumber % i !== 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isDivisibleInRange([1, 5], 60));
console.log(isDivisibleInRange([1, 5], 15));
console.log(isDivisibleInRange([2, 6], 120));
console.log(isDivisibleInRange([6, 3], 6));
