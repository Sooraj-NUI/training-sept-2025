const arr1 = [3, 45, 42, 11, 34, 7, 7, 7];
const arr2 = [35, -7, 87, 11, 1, 11, 11, 45];

function findCommonNumbers(firstArray, secondArray) {
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    console.error("Both inputs must be arrays");
    return [];
  }

  if (firstArray.length === 0 || secondArray.length === 0) {
    console.error("One or both arrays are empty");
    return [];
  }

  let commonElements = [];
  console.log(firstArray);
  console.log(secondArray);
  for (let i = 0; i < firstArray.length; i++) {
    let isFound = false;

    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        for (let k = 0; k < commonElements.length; k++) {
          if (commonElements[k] === firstArray[i]) {
            isFound = true;
            break;
          }
        }
        if (isFound === false) {
          commonElements.push(firstArray[i]);
        }
      }
    }
  }
  console.log(commonElements);
}
findCommonNumbers(arr1, arr2);
