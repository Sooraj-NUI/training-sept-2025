function reverseRotate(inputString, rotateRange) {
  if (!inputString) {
    console.error("Input string is empty");
    return "";
  }

  let stringLength = inputString.length;
  rotateRange = rotateRange % stringLength;
  let finalWord = "";

  if (rotateRange > 0) {
    let splitIndex = rotateRange;
    let wordFirstHalf = "";
    let wordSecondHalf = "";

    for (let i = 0; i < splitIndex; i++) {
      wordFirstHalf += inputString[i];
    }
    for (let i = splitIndex; i < stringLength; i++) {
      wordSecondHalf += inputString[i];
    }

    finalWord = wordSecondHalf + wordFirstHalf;
  } else if (rotateRange < 0) {
    let splitIndex = stringLength + rotateRange;
    let wordFirstHalf = "";
    let wordSecondHalf = "";

    for (let i = 0; i < splitIndex; i++) {
      wordFirstHalf += inputString[i];
    }
    for (let i = splitIndex; i < stringLength; i++) {
      wordSecondHalf += inputString[i];
    }

    finalWord = wordSecondHalf + wordFirstHalf;
  } else {
    finalWord = inputString;
  }

  return finalWord;
}

console.log(reverseRotate("unar", 2));
console.log(reverseRotate("llohe", 3));
console.log(reverseRotate("unar", -2));
