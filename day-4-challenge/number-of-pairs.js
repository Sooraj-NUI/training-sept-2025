const arr1 = [4, 2, 5, 6, 8, 1];
const sum = 6;
let result = [];
function findNumberOfPairs(inputArray, sum) {
  if (!Array.isArray(inputArray)) {
    console.error("Input must be an array");
    return [];
  }
  if (typeof sum !== "number") {
    console.error("Sum must be a number");
    return [];
  }
  if (inputArray.length < 2) {
    console.error("Array should have at least two elements");
    return [];
  }

  console.log(inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[i] + inputArray[j] === sum) {
        result.push([inputArray[i], inputArray[j]]);
      }
    }
  }
  console.log(result);
}
findNumberOfPairs(arr1, sum);
