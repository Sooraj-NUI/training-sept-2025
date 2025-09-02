function sumOfMultiples(baseNumber, multiple) {
  if (typeof baseNumber !== "number" || typeof multiple !== "number") {
    console.error("both inputs must be a number");
    return false;
  } else if (baseNumber <= 0 || multiple <= 0) {
    console.error("Inputs must be a positive number");
    return false;
  }
  let count = 0;
  for (let i = 1; i <= multiple; i++) {
    count = count + baseNumber * i;
  }
  return count;
}
console.log(sumOfMultiples(8, 3));