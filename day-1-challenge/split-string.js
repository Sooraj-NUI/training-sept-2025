function splitStringInArray(inputString, valueToSplit) {
  if (
    typeof inputString !== "string" ||
    typeof valueToSplit !== "number" ||
    valueToSplit <= 0 ||
    valueToSplit > inputString.length
  ) {
    return "Invalid input: inputString must be a string and valueToSplit must be a non-negative number less than or equal to the length of the string.";
  }
  let groupedData = [];
  let userInputWithoutSpace = inputString.split(" ").join("");
  console.log(userInputWithoutSpace);
  for (let i = 0; i < userInputWithoutSpace.length; i++) {
    groupedData.push(userInputWithoutSpace.slice(i, i + valueToSplit));
    i = i + valueToSplit - 1;
  }
  return groupedData;
}
console.log(splitStringInArray("numenticaui", 2));