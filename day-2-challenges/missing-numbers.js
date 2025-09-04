function sortingFunction(inputArray) {
  if (!Array.isArray(inputArray) || inputArray.length < 1) {
    return "provide a valid array";
  }
  let valueContainer = 0;
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        valueContainer = inputArray[j + 1];
        inputArray[j + 1] = inputArray[j];
        inputArray[j] = valueContainer;
      }
    }
  }
  return inputArray;
}

function findMissingNumbers(inputArray) {
  if (!Array.isArray(inputArray) || inputArray.length < 1) {
    return "provide a valid array";
  }
  let sortedValue = sortingFunction(inputArray);
  let missingValues = [];
  for (let i = sortedValue[0]; i <= sortedValue[sortedValue.length - 1]; i++) {
    if (!sortedValue.includes(i)) {
      missingValues.push(i);
    }
  }
  return `missing numbers in range [${sortedValue[0]} - ${
    sortedValue[sortedValue.length - 1]
  }] is ${missingValues}`;
}
console.log(findMissingNumbers([1, 2, 4, 9]));
