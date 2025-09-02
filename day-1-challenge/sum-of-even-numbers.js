function findEvenSum(inputArray) {
  if (!inputArray || !Array.isArray(inputArray) || inputArray.length === 0) {
    console.error(inputArray.length);
    return false;
  }
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      sum = sum + inputArray[i];
    }
  }
  if (sum === 0) {
    console.error("The array contains only odd numbers");
    return true;
  }
  console.log(sum);
}
findEvenSum([1, 3, 5,2]);