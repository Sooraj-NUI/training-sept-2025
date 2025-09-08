function flattenNestedArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    console.log("Input must be an array");
    return [];
  }
  if (inputArray.length === 0) {
    return [];
  }
  let result = [];
  let nestedArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      result = result.concat(flattenNestedArray(inputArray[i]));
    } else {
      result.push(inputArray[i]);
    }
  }
  return result;
}
console.log(flattenNestedArray([1, 2, [3, 4]]));
