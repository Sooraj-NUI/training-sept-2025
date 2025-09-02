function numberToString(numberValue) {
  numberValue = Number(numberValue);
  if (
    isNaN(numberValue) ||
    typeof numberValue === "string" ||
    isNaN(Number(numberValue))
  ) {
    console.error("inputs must be a number geater than or equal to 0");
    return false;
  }

  finalString = "";
  let isNegetive = false
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  if (numberValue < 0) {
    isNegetive = true;
  numberValue =   numberValue * -1;
    console.log(numberValue);
  } else {
  }
  numberValue = numberValue.toString();

  console.log(numberWords[0]);

  for (let i = 0; i < numberValue.length; i++) {
    console.log(numberValue[i]);
    console.log(numberWords[numberValue[i]]);
    finalString = finalString + numberWords[numberValue[i]];
  }
  if(isNegetive){
    console.log("negetive "+finalString)
  }
  else{
    console.log(finalString)
  }
}
numberToString(-98);