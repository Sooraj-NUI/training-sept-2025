purchaseDetails = [
  {
    id: "t1",
    userId: 101,
    category: "food",
    amount: 120.5,
    currency: "INR",
    ts: "2025-08-01T09:10:00Z",
  },
  {
    id: "t2",
    userId: 101,
    category: "travel",
    amount: 80.0,
    currency: "INR",
    ts: "2025-08-02T14:33:00Z",
  },
  {
    id: "t3",
    userId: 102,
    category: "food",
    amount: 60.0,
    currency: "INR",
    ts: "2025-08-02T07:05:00Z",
  },
  {
    id: "t4",
    userId: 101,
    category: "food",
    amount: -20.0,
    currency: "INR",
    ts: "2025-08-03T10:00:00Z",
  },
];

function crateTransactionSummary(transactionDetails) {
  if (!Array.isArray(transactionDetails) || transactionDetails.length === 0) {
    console.error("provided input is empty");
    return [];
  }

  let finalArray = [];

  const userIdWithoutDuplicates = [];
  for (let i = 0; i < transactionDetails.length; i++) {
    let isFound = false;
    for (let j = 0; j < userIdWithoutDuplicates.length; j++) {
      if (userIdWithoutDuplicates[j] === transactionDetails[i].userId) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      userIdWithoutDuplicates.push(transactionDetails[i].userId);
    }
  }


  const userIds = userIdWithoutDuplicates;
  for (let i = 0; i < userIds.length; i++) {
    const result = {};
    let totalAmount = 0;
    const byCategory = {};
    let count = 0;
    let lastTransactionTime = "";
    let currency = "";
    console.log(userIds);
    const key = userIds[i];
    for (let j = 0; j < transactionDetails.length; j++) {
      if (transactionDetails[j].userId === key) {
        console.log(totalAmount);
        totalAmount += transactionDetails[j].amount;
        if (byCategory[transactionDetails[j].category]) {
          byCategory[transactionDetails[j].category] +=
            transactionDetails[j].amount;
        } else {
          byCategory[transactionDetails[j].category] =
            transactionDetails[j].amount;
        }
        count++;
        if (transactionDetails[j].ts > lastTransactionTime) {
          lastTransactionTime = transactionDetails[j].ts;
        }
        currency = transactionDetails[j].currency;
      }
    }
    result["key"] = key;
    result["totalAmount"] = totalAmount;
    result["byCategory"] = byCategory;
    result["count"] = count;
    result["lastTransactionTime"] = lastTransactionTime;
    result["currency"] = currency;
    finalArray.push(result);
  }
  console.log(finalArray);
}

crateTransactionSummary(purchaseDetails);
