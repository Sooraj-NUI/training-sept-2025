const originalString =
  "Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]";
let replaceValues = [
  ["location", "Chennai"],
  ["state", "Tamil Nadu"],
  ["phone", "+91-9876543210"],
];
function replaceTemplateString(inputString, replaceString) {
  if (
    !inputString ||
    typeof inputString !== "string" ||
    !Array.isArray(replaceString)
  ) {
    console.error("Invalid input, please give the proper input");
    return false;
  }
  //   console.log(inputString);
  if (!inputString || !replaceString || typeof inputString !== "string") {
    console.log("Invalid input,please give the proper input");
    return false;
  }

  //   console.log(replaceString);
  let values = {};
  console.log(replaceString[0][1]);
  for (let i = 0; i < replaceString.length; i++) {
    // console.log(replaceString[i][0]);
    // console.log(replaceString[i][1]);
    values[replaceString[i][0]] = replaceString[i][1];
  }
  //   console.log(values);

  let isInsideTargetString = false;
  let result = "";
  let savedValue = "";

  for (let i = 0; i < inputString.length; i++) {
    let currentChar = inputString[i];
    console.log(currentChar);
    if (currentChar === "#" && inputString[i + 1] === "[") {
      isInsideTargetString = true;
      savedValue = "";
      i++;
      continue;
    }
    console.log(isInsideTargetString);
    if (isInsideTargetString && currentChar === "]") {
      console.log(result);
      console.log(savedValue);
      result += values[savedValue] || "";
      savedValue = "";
      isInsideTargetString = false;
      continue;
    }
    if (isInsideTargetString) {
      savedValue += currentChar;
    } else {
      result += currentChar;
    }
  }
  return result;
}
console.log(replaceTemplateString(originalString, replaceValues));
