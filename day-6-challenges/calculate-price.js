// The data is the available inventory in the store. In the store you have various products with their price and available quantity.
// Based on this data, write a function to generate the total bill of a grocery list given by an user
// getTotalAmount([
//     { item: 'Jam - Apricot', quantity: 2 },
//     { item: 'Creamers - 10%', quantity:1 },
//   ]); // The result would be (94.11 * 2) + (1 * 49.54)
// Please note if the user wants an quantity above what the store has. You should account for the quantity the store has. For example if the user wants 4 quantity but the store has only 2, then your calculation should only account for 2

const priceTable = require("./store-product-list (1).json");

const groceryList = [
  { item: "Jam - Apricot", quantity: 2 },
  { item: "Creamers - 10%", quantity: 1 },
  // { item: "Jam - Apricot", quantity: 10 },
];

const finalBill = {};
let totalPrice = 0;
let priceWithoutDollor = 0;

function getTotalAmount(priceTable) {
  if (!Array.isArray(priceTable) || !Array.isArray(groceryList)) {
    console.error(
      "Invalid input: both priceTable and groceryList must be arrays"
    );
    return [];
  }
  for (let i = 0; i < groceryList.length; i++) {
    let itemName = groceryList[i].item;
    for (let j = 0; j < priceTable.length; j++) {
      let priceWithoutDollor = priceTable[j].price.replace("$", "");
      if (priceTable[j].product === itemName) {
        if (groceryList[i].quantity <= priceTable[j].Quantity) {
          totalPrice = priceWithoutDollor * groceryList[i].quantity;
          console.log(priceWithoutDollor);
          finalBill[groceryList[i].item] = totalPrice;
        } else {
          totalPrice = priceWithoutDollor * priceTable[j].Quantity;

          console.log(typeof priceTable[j].price);
          console.log(priceWithoutDollor);
          console.log(priceTable[j].Quantity);
          console.log(totalPrice);
          finalBill[groceryList[i].item] = totalPrice;
        }
      }
    }
  }
  console.log(finalBill);
}

getTotalAmount(priceTable);
