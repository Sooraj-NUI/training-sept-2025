function findCharCount(inputArray) {
  if (!Array.isArray(inputArray)) {
    console.error("Input must be an array");
    return result;
  }
  if (inputArray.length === 0) {
    return result;
  }
  const result = {};
  console.log(inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i]);
    if (result[inputArray[i]] !== undefined) {
      result[inputArray[i]]++;
      console.log(result[inputArray[i]]);
    } else {
      result[inputArray[i]] = 1;
    }
  }

  return result;
}
console.log(findCharCount(["a", "b", "a", "c", "b", "a"]));
