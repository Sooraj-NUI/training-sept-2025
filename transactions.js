const transactionDetails = {
  meta: {
    asOf: "2025-09-15T12:00:00+05:30",
    currency: "INR",
    timezone: "Asia/Kolkata",
    notes: [
      "Transactions: evaluate discounts only for status === 'success'.",
      "Ticket SLA: 'older than 48 hours' means strictly greater than 48h.",
    ],
  },
  users: [
    {
      id: "u1",
      name: "Arun",
    },
    {
      id: "u2",
      name: "Uma",
    },
    {
      id: "u3",
      name: "Aadhir",
    },
    {
      id: "u4",
      name: "Aarik",
    },
    {
      id: "u5",
      name: "Benita",
    },
    {
      id: "u6",
      name: "Vanchi",
    },
  ],
  coupons: [
    {
      code: "FEST50",
      type: "percent",
      value: 50,
      maxDiscount: 500,
      validFrom: "2025-09-01",
      validTo: "2025-09-30",
      minOrder: 1000,
    },
    {
      code: "FLAT200",
      type: "flat",
      value: 200,
      maxDiscount: 200,
      validFrom: "2025-09-10",
      validTo: "2025-09-20",
      minOrder: 500,
    },
    {
      code: "DIWALI1000",
      type: "flat",
      value: 1000,
      maxDiscount: 1000,
      validFrom: "2025-09-14",
      validTo: "2025-09-16",
      minOrder: 5000,
    },
    {
      code: "OLD10",
      type: "percent",
      value: 10,
      maxDiscount: 999,
      validFrom: "2025-08-01",
      validTo: "2025-08-31",
      minOrder: 100,
    },
  ],
  transactions: [
    {
      id: "t1",
      userId: "u1",
      ts: "2025-09-10T10:05:00+05:30",
      amount: 1200,
      status: "success",
      items: ["sku101", "sku205"],
      paymentMethod: "card",
      couponCodes: ["FEST50"],
    },
    {
      id: "t2",
      userId: "u2",
      ts: "2025-09-11T09:30:00+05:30",
      amount: 400,
      status: "success",
      items: ["sku205"],
      paymentMethod: "upi",
      couponCodes: ["FLAT200"],
    },
    {
      id: "t3",
      userId: "u3",
      ts: "2025-09-12T12:00:00+05:30",
      amount: 600,
      status: "success",
      items: ["sku300"],
      paymentMethod: "cod",
      couponCodes: [],
    },
    {
      id: "t4",
      userId: "u1",
      ts: "2025-09-13T14:45:00+05:30",
      amount: 5200,
      status: "success",
      items: ["sku101"],
      paymentMethod: "card",
      couponCodes: ["FEST50", "FLAT200"],
    },
    {
      id: "t5",
      userId: "u2",
      ts: "2025-09-15T09:10:00+05:30",
      amount: 6500,
      status: "success",
      items: ["sku999"],
      paymentMethod: "card",
      couponCodes: ["DIWALI1000", "FEST50"],
    },
    {
      id: "t6",
      userId: "u4",
      ts: "2025-09-15T10:00:00+05:30",
      amount: 2000,
      status: "failed",
      items: ["sku500"],
      paymentMethod: "card",
      couponCodes: ["FEST50"],
    },
    {
      id: "t7",
      userId: "u5",
      ts: "2025-09-02T16:20:00+05:30",
      amount: 800,
      status: "success",
      items: ["sku205"],
      paymentMethod: "upi",
      couponCodes: ["OLD10"],
    },
    {
      id: "t8",
      userId: "u6",
      ts: "2025-09-01T00:10:00+05:30",
      amount: 1000,
      status: "success",
      items: ["sku101"],
      paymentMethod: "card",
      couponCodes: ["FEST50"],
    },
  ],
  tickets: [
    {
      id: "c1",
      userId: "u1",
      created: "2025-09-12T09:10:00+05:30",
      status: "open",
      topic: "Refund",
      messages: 2,
    },
    {
      id: "c2",
      userId: "u3",
      created: "2025-09-13T12:00:00+05:30",
      status: "open",
      topic: "Login",
      messages: 1,
    },
    {
      id: "c3",
      userId: "u2",
      created: "2025-09-14T16:00:00+05:30",
      status: "open",
      topic: "Delivery delay",
      messages: 3,
    },
    {
      id: "c4",
      userId: "u4",
      created: "2025-09-10T08:00:00+05:30",
      status: "closed",
      topic: "Payment",
      messages: 5,
    },
    {
      id: "c5",
      userId: "u5",
      created: "2025-09-13T11:59:00+05:30",
      status: "open",
      topic: "Address update",
      messages: 1,
    },
    {
      id: "c6",
      userId: "u6",
      created: "2025-09-15T10:30:00+05:30",
      status: "open",
      topic: "Coupon help",
      messages: 1,
    },
  ],
};

function findEligibleCouponForSuccessTransaction(transactionData) {
  const users = transactionData.users;
  const coupons = transactionData.coupons;
  const transactions = transactionData.transactions;

  const successfulTransactions = transactions.filter(
    (data) => data.status.toLowerCase() === "success"
  );


  const result = successfulTransactions.map((transaction) => {
    const transactionDate = new Date(transaction.ts);
    const eligibleCoupons = transaction.couponCodes.filter((code) => {
      const coupon = coupons.find((coupon) => coupon.code === code);

      const validFrom = new Date(coupon.validFrom);
      const validTo = new Date(coupon.validTo);

      const enoughAmount = transaction.amount >= coupon.minOrder;
      const validdate =
        transactionDate >= validFrom && transactionDate <= validTo;
      if (enoughAmount && validdate) {
        return true;
      }
    });

    let bestCoupon = null;
    let bestDiscount = 0;

    eligibleCoupons.forEach((code) => {
      const coupon = coupons.find((coupon) => coupon.code === code);
      let discount = 0;

      if (coupon.type === "percent") {
        discount = transaction.amount * (coupon.value / 100);
        if (discount > coupon.maxDiscount) {
          discount = coupon.maxDiscount;
        }
      } else if (coupon.type === "flat") {
        if (coupon.value >= coupon.maxDiscount) {
          discount = coupon.maxDiscount;
        } else if (coupon.value < coupon.maxDiscount) {
          discount = coupon.value;
        }
      }
      if (discount > bestDiscount) {
        bestDiscount = discount;
        bestCoupon = code;
      }
    });

    const netAmount = transaction.amount - bestDiscount;

    return {
      txid: transaction.id,
      choosenCoupon: bestCoupon,
      discount: bestDiscount,
      net: netAmount,
    };
  });
  return result;
}
console.log(findEligibleCouponForSuccessTransaction(transactionDetails));

function findTicketStatus(transactionData) {
  const result = [];
  const tickets = transactionData.tickets;
  const meta = transactionData.meta;
  const ticketsWithStatusOpen = tickets.filter(
    (ticket) => ticket.status === "open"
  );

  ticketsWithStatusOpen.forEach((item) => {
    if (item.status.toLowerCase() === "open") {
      const created = item.created;

      let startDate = new Date(created);
      let endDate = new Date(meta.asOf);

      if (startDate.getTime() < endDate.getTime()) {
        endDate = new Date(created);
        startDate = new Date(meta.asOf);
      }
      const differenceInMinutes = startDate.getTime() - endDate.getTime();

      const differenceInHours = Math.round(differenceInMinutes / (1000 * 60 * 60));

      if (differenceInHours > 40) {
        result.push({
          ticketId: item.id,
          ageHours: differenceInHours,
          status: "breach",
        });
      } else {
        result.push({
          ticketId: item.id,
          ageHours: differenceInHours,
        });
      }
    }
  });
  return result;
}
console.log(findTicketStatus(transactionDetails));
