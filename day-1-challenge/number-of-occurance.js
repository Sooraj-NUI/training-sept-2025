function findNumberOfOccurance(sentence, searchWord) {
  if (typeof sentence === "string" && typeof searchWord === "string") {
    let userInputValues = sentence.split(" ");
    let occurrance = 0;
    for (let i = 0; i < userInputValues.length; i++) {
      if (userInputValues[i].includes(searchWord.split(" ").join(""))) {
        occurrance++;
      }
    }
    return `${occurrance} occurance of ${searchWord} in the string`;
  } else {
    return "provide inputs as string";
  }
}
console.log(
  findNumberOfOccurance(
    "be kind whenever possible. kindness is what matters",
    "kind"
  )
);