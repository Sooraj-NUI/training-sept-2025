function mergeObject(firstObject, secondObject) {
  if (typeof firstObject !== "object" || firstObject === null) {
    console.error("input should be an object");
    return {};
  }
  if (typeof secondObject !== "object" || secondObject === null) {
    console.error("input should be an object");
    return {};
  }
  const result = {};
  for (let items in firstObject) {
    if (!Array.isArray(firstObject[items]) || firstObject[items] === null) {
      console.error("values should be a valid array");
      return {};
    }
    console.log(firstObject[items]);
    console.log(items);
    result[items] = firstObject[items];
    console.log(result[items]);
  }
  for (let items in secondObject) {
    if (!Array.isArray(secondObject[items]) || secondObject[items] === null) {
      console.error("values should be a valid array");
      return {};
    }
    console.log(items);
    console.log(secondObject[items]);
    console.log(result[items]);
    if (result[items] !== undefined) {
      result[items] = result[items].concat(secondObject[items]);
    } else {
      result[items] = secondObject[items];
    }
    console.log(result[items]);
  }
  console.log(result);
  return result;
}
mergeObject(
  { fruits: ["apple", "Orange"], veggies: ["carrot"] },
  { fruits: ["banana"], drinks: ["water"] }
);
console.log(
  mergeObject(
    { fruits: ["apple", "Orange"], veggies: ["carrot"] },
    { fruits: ["banana"], drinks: ["water"] }
  )
);

console.log(mergeObject({ fruits: "apple" }, { fruits: ["banana"] }));

console.log(mergeObject({}, { drinks: ["water"] }));

console.log(mergeObject(null, { fruits: ["apple"] }));

console.log(mergeObject({ fruits: ["apple"] }, { fruits: null }));
