function rotateString(inputString, rotateRange) {
  if (!inputString) {
    console.error("Input string is empty");
    return "";
  }
  let wordFirstHalf = "";
  let wordSecondHalf = "";
  let finalWord = "";
  let stringLength = inputString.length;
  if (rotateRange > 0) {
    let splitIndex = stringLength - rotateRange;
    for (let i = 0; i < splitIndex; i++) {
      console.log(inputString[i]);
      wordFirstHalf += inputString[i];
    }
    for (let j = splitIndex; j <= inputString.length - 1; j++) {
      console.log(inputString[j]);
      wordSecondHalf += inputString[j];
    }

    finalWord = wordSecondHalf + wordFirstHalf;
    console.log(finalWord);
    return finalWord;
  } else if (rotateRange < 0) {
    let splitIndex = -rotateRange;
    let wordFirstHalf = "";
    let wordSecondHalf = "";

    for (let i = 0; i < splitIndex; i++) {
      wordFirstHalf += inputString[i];
    }
    for (let i = splitIndex; i < stringLength; i++) {
      wordSecondHalf += inputString[i];
    }

    finalWord = wordSecondHalf + wordFirstHalf;
    console.log(finalWord);
    return finalWord;
  } else {
    finalWord = inputString;
  }
}
console.log(rotateString("arun", 2));
console.log(rotateString("arun", -2));
console.log(rotateString("hello", 3));
