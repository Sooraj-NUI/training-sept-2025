function stringOperation(inputString) {
  if (!inputString || typeof inputString !== "string") {
    return "input should be array with non empty values";
  }

  inputString = inputString.split(" ").join("");
  console.log(inputString);
  let operator = "";
  const operationSymbols = ["+", "-", "/", "*"];
  for (let i = 0; i < operationSymbols.length; i++) {
    for (let j = 0; j < inputString.length; j++) {
      if (inputString[j] === operationSymbols[i]) {
        operator = operationSymbols[i];
        break;
      }
    }
  }

  if (!operator) {
    return "no operator found";
  }

  let parts = inputString.split(operator);

  if (parts.length !== 2) {
    return "more than one operator or malformed string";
  }
  console.log(parts);
  let firstOperand = parseInt(parts[0]);
  let secondOperand = parseInt(parts[1]);

  if (isNaN(firstOperand) || isNaN(secondOperand)) {
    return "operands must be numbers";
  }
  if (operator === "/" && secondOperand === 0) {
    return "Division by zero is not allowed";
  }
  // console.log(firstOperand + secondOperand)
  if (operator === "+") {
    return firstOperand + secondOperand;
  }
  if (operator === "-") {
    return firstOperand - secondOperand;
  }
  if (operator === "/") {
    return firstOperand / secondOperand;
  }
  if (operator === "*") {
    return firstOperand * secondOperand;
  }
  console.log(operator);
}
console.log(stringOperation("10 + 10"));
// console.log(stringOperation("20-5"));
// console.log(stringOperation("8*3"));
// console.log(stringOperation("100 / 20"));

// console.log(stringOperation(""));
// console.log(stringOperation("100"));
// console.log(stringOperation("10/0"));
// console.log(stringOperation("10 + a"));
