// The data is the available inventory in the store. In the store you have various products with their price and available quantity.
// Based on this data, write a function to generate the total bill of a grocery list given by an user
// getTotalAmount([
//     { item: 'Jam - Apricot', quantity: 2 },
//     { item: 'Creamers - 10%', quantity:1 },
//   ]); // The result would be (94.11 * 2) + (1 * 49.54)
// Please note if the user wants an quantity above what the store has. You should account for the quantity the store has. For example if the user wants 4 quantity but the store has only 2, then your calculation should only account for 2

const priceTable = require("./store-product-list (1).json");

const groceryList = [
  { item: "Jam - Apricot", quantity: 4 },
  { item: "Creamers - 10%", quantity: 2 },
];

function getTotalAmount(priceTable) {
  if (!Array.isArray(priceTable) || !Array.isArray(groceryList)) {
    console.error(
      "Invalid input: both priceTable and groceryList must be arrays"
    );
    return [];
  }
  if (groceryList.length === 0) {
    console.error("no items added");
    return [];
  }
  const groceryFinal = {};
  let totalPrice = 0;
  for (let k = 0; k < groceryList.length; k++) {
    let entry = groceryList[k];
    if (!("item" in entry) || !("quantity" in entry)) {
      console.error("invalid grocery entry");
      return null;
    }
    if (typeof entry.item !== "string" || typeof entry.quantity !== "number") {
      console.error("invalid type in the input");
      return null;
    }

    let item = groceryList[k].item;
    let quantity = groceryList[k].quantity;

    if (groceryFinal[item] === undefined) {
      groceryFinal[item] = quantity;
    } else {
      groceryFinal[item] += quantity;
    }
  }

  for (let item in groceryFinal) {
    let productFound = false;
    for (let i = 0; i < priceTable.length; i++) {
      if (priceTable[i].product === item) {
        productFound = true;
        if (priceTable[i].Quantity >= groceryFinal[item]) {
          let priceWithoutDollar = priceTable[i].price.replace("$", "");
          totalPrice += priceWithoutDollar * groceryFinal[item];
        } else {
          let priceWithoutDollar = priceTable[i].price.replace("$", "");
          totalPrice += priceWithoutDollar * priceTable[i].Quantity;
        }
        break;
      }
    }
    if (!productFound) {
      return "invalid product selected";
    }
  }
  return `$${totalPrice}`;
}

console.log(getTotalAmount(priceTable));
