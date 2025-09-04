function checkNumberInRange(inputString, numberToFind) {
  console.log(inputString.length);
  if (!Array.isArray(inputString) || typeof numberToFind !== "number") {
    return "inputString must be an array of two numbers and numberToFind must be a number.";
  }
  if (inputString.length === 1) {
    console.error("inputs must have minimum 2 numbers to compare");
    return false;
  }
  if (inputString.length === 2) {
    let laregestNumber = 0;
    let smallestNumber = 0;
    if (inputString[0] > inputString[1]) {
      laregestNumber = inputString[0];
      smallestNumber = inputString[1];
    } else {
      laregestNumber = inputString[1];
      smallestNumber = inputString[0];
    }
    console.log(laregestNumber, smallestNumber);

    if (numberToFind >= smallestNumber && numberToFind <= laregestNumber) {
      return true;
    }
    return false;
  }
  if (inputString.length > 2) {
    for (let i = 0; i < inputString.length; i++) {
      for (j = 0; j < inputString.length - i - 1; j++) {
        if (inputString[j] > inputString[j + 1]) {
          let swapValue = inputString[j];
          inputString[j] = inputString[j + 1];
          inputString[j + 1] = swapValue;
        }
      }
    }
    console.log(inputString);
    let smallestNumber = inputString[0];
    let laregestNumber = inputString[inputString.length - 1];
    console.log(smallestNumber, laregestNumber);
    if (numberToFind >= smallestNumber && numberToFind <= laregestNumber) {
      return true;
    }
    return false;
  }
}
console.log(checkNumberInRange([1, 1], 1));
