function groupNames(inputNames) {
  if (
    inputNames === null ||
    !Array.isArray(inputNames) ||
    inputNames.length === 0
  ) {
    console.log("Invalid input,please give the proper input");
    return;
  }
  for (let i = 0; i < inputNames.length; i++) {
    if (typeof inputNames[i] !== "string") {
      console.log("Invalid input,please give the proper input");
      return;
    }
  }
  let result = [];
  console.log(inputNames.length);
  for (let i = 0; i < inputNames.length; i++) {
    for (let j = 0; j < inputNames.length - i - 1; j++) {
      if (inputNames[j] > inputNames[j + 1]) {
        let temp = inputNames[j];
        inputNames[j] = inputNames[j + 1];
        inputNames[j + 1] = temp;
      }
    }
  }
  let sortedNames = inputNames;
  let visited = {};
  let firstLetter = "";
  console.log(sortedNames);
  for (let k = 0; k < sortedNames.length; k++) {
    let dummyArray = [];
    firstLetter = sortedNames[k].charAt(0);
    if (visited[firstLetter]) continue;
    console.log(sortedNames[k].charAt(0));
    for (let l = 0; l < sortedNames.length; l++) {
      if (firstLetter === sortedNames[l].charAt(0)) {
        dummyArray.push(sortedNames[l]);
      }
      visited[firstLetter] = true;
    }
    console.log(dummyArray);
    result.push(dummyArray);
  }
  return result;
}
console.log(groupNames(["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]));
