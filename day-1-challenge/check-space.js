function checkSpace(inputString) {
  if (inputString === undefined) {
    console.error("no input provided.");
    return false;
  }

  if (typeof inputString !== "string") {
    console.error("input must be a string");
    return false;
  }

  if (inputString.length === 0) {
    return true;
  }
  let isSpaceFound = false;
  for (let i = 0; i <= inputString.length; i++) {
    console.log(inputString[i]);
    if (inputString[i] === " ") {
      isSpaceFound = true;
    }
  }
  return isSpaceFound;
}
console.log(checkSpace("arun"));
console.log(checkSpace());
console.log(checkSpace(123));
console.log(checkSpace(""));
