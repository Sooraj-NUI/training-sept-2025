const arr1 = [3, 45, 42, 11, 34];
const arr2 = [35, -7, 87, 11, 1, 45];

function findDifference(firstArray, secondArray) {
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    console.log("Both inputs must be arrays");
    return;
  }
  if (firstArray.length === 0 && secondArray.length === 0) {
    console.log([]);
    return;
  }
  const elementsPresentInOneArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    let isFound = false;
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        isFound = true;
        break;
      }
    }
    if (isFound === false) {
      elementsPresentInOneArray.push(firstArray[i]);
    }
  }

  for (let i = 0; i < secondArray.length; i++) {
    let isFoundSecond = false;
    for (let j = 0; j < firstArray.length; j++) {
      if (secondArray[i] === firstArray[j]) {
        isFoundSecond = true;
        break;
      }
    }
    if (isFoundSecond === false) {
      for (let k = 0; k < elementsPresentInOneArray.length; k++) {}
      elementsPresentInOneArray.push(secondArray[i]);
    }
  }

  console.log(elementsPresentInOneArray);
}
findDifference(arr1, arr2);
