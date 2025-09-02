function findRepeatingChar(inputString) {
  if (!inputString || typeof inputString !== "string" || inputString === " ") {
    console.error("Invalid input,please give the proper input");
    return false;
  }

  let repeatingCharCount = {};
  for (let i = 0; i < inputString.length; i++) {
    // console.log(inputString[i]);
    if (inputString[i]) {
      let checkingString = inputString[i];
      if (!repeatingCharCount[checkingString]) {
        repeatingCharCount[checkingString] = 1;
      } else {
        repeatingCharCount[checkingString]++;
      }
    }
  }
  let maxCount = 0;
  let maxChar = null;

  for (let char in repeatingCharCount) {
    if (repeatingCharCount[char] >= maxCount) {
      maxChar = char;
      console.log(maxChar);
      maxCount = repeatingCharCount[char];
    }
  }
  return `${maxChar}:${maxCount}`;
}
console.log(findRepeatingChar("traaaingfornewbie"));