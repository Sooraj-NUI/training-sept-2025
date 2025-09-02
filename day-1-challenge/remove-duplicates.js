function removeDuplicates(inputArray) {
  if (inputArray === undefined) {
    console.error("no input provided.");
    return [];
  }
  if (!Array.isArray(inputArray)) {
    console.error("input must be an array.");
    return [];
  }
  let uniqueArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i], uniqueArray.length);
    let isFound = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (uniqueArray[j] === inputArray[i]) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      uniqueArray.push(inputArray[i]);
    }
    console.log(uniqueArray);
  }
  return uniqueArray;
}

console.log(removeDuplicates([1, "two", "two", 3, "two"]));
