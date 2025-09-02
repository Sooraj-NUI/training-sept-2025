function filterInvalid(inputArray, removeType) {
  if (!Array.isArray(inputArray) && removeType !== "string") {
    return "The values should be in an array and the type to remove should be a string.";
  }
  let filteredValue = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] !== removeType) filteredValue.push(inputArray[i]);
  }
  return filteredValue;
}
console.log(filterInvalid(["a", "d", 1, true, "cd", 33], "number"));
console.log(filterInvalid(["a", "d", 1, true, "cd", 33], "boolean"));
console.log(filterInvalid(["a", "d", 1, true, "cd", 33], "string"));