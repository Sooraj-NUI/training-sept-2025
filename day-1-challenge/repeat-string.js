function repeatString(inputString, repeatTimes) {
  if (typeof inputString !== "string") {
    console.error("inputString must be a string.");
    return "";
  }

  if (typeof repeatTimes !== "number" || !Number.isInteger(repeatTimes)) {
    console.error("repeatTimes must be an integer.");
    return "";
  }

  if (repeatTimes < 0) {
    console.error("repeatTimes cannot be negative.");
    return "";
  }

  if (repeatTimes === 0 || inputString.length === 0) {
    return "";
  }

  finalRepeatedString = "";

  for (let i = 0; i < repeatTimes; i++) {
    finalRepeatedString = finalRepeatedString + inputString;
  }
  console.log(finalRepeatedString);
}
repeatString("arun", 3);
