// 6. Convert an array of key-value pairs into an object.
// toObject([["name", "Arun"], ["age", 39]]);
// Output: { name: "Arun", age: 39 }

const inputArray = [
  ["name", "Arun"],
  ["age", 39],
];

function convertArrayToObject(inputArray) {
  if (!Array.isArray(inputArray)) {
    console.error("Input must be an array");
    return {};
  }
  if (inputArray.length === 0) {
    return {};
  }

  const result = {};
  console.log(inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length !== 2 || !Array.isArray(inputArray[i])) {
      console.error("values must be array of arrays with 2 values");
      return {};
    }
    console.log(inputArray[i]);
    let key = inputArray[i][0];
    console.log(key);
    let value = inputArray[i][1];
    console.log(value);
    let keyAlredyExist = false;
    for (let existingKey in result) {
      if (existingKey === key) {
        keyAlredyExist = true;
        break;
      }
    }
    if (!keyAlredyExist) {
      result[key] = value;
    }
  }
  return result;
}
console.log(convertArrayToObject(inputArray));
