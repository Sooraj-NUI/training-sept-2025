inputArray = [34, 12, 10, 15, 7, 21, 81];

function groupMultiples(inputArray) {
  if (!Array.isArray(inputArray)) {
    console.error("Input must be an array");
    return {};
  }
  if (inputArray.length === 0) {
    console.error("Array should be non empty");
    return {};
  }

  const result = {};
  for (let i = 1; i <= 10; i++) {
    let divisibleValues = [];
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j] % i === 0) {
        divisibleValues.push(inputArray[j]);
      }
      result[i] = divisibleValues;
      //   console.log(divisibleValues);
    }
  }
  return result;
}
console.log(groupMultiples(inputArray));
