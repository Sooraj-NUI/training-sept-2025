let input = "000000123423423000";
let resultArray = [];
function removeZeros(inputString, checkSide) {
  if (typeof inputString !== "string") {
    console.error("input should be a string");
    return false;
  }
  console.log(checkSide === "leading");

  const allowedSides = ["leading", "trailing", "both"];

  if (!allowedSides.includes(checkSide.toLowerCase())) {
    console.error("the value to check should be leading or trailing");
    return false;
  }
  let newArray = [];
  for (let i = 0; i < inputString.length; i++) {
    newArray.push(inputString[i]);
  }
  console.log(newArray);
  if (checkSide.toLowerCase() === "leading") {
    let removedFromStart = Number(inputString);
    console.log(removedFromStart);
    return removedFromStart;
  }
  if (checkSide.toLowerCase() === "trailing") {
    for (let i = newArray.length - 1; i >= 0; i--) {
      console.log(newArray[i]);
      if (newArray[i] === "0") {
        newArray.pop();
      } else {
        break;
      }
    }
    console.log(newArray);
    return newArray.join("");
  }
  if (checkSide.toLowerCase() === "both") {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] !== "0") {
        resultArray.push(newArray[i]);
      }
    }
  }
  return resultArray.join("");
}
console.log(removeZeros(input, "leading"));
console.log(removeZeros(input, "trailing"));
console.log(removeZeros(input, "both"));
