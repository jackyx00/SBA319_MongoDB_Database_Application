const orders = [
  {
    cart_id: "c5001",
    u_id: "u001",
    items: [
      {
        item_id: "p01",
        quantity: 2,
      },
      {
        item_id: "p03",
        quantity: 1,
      },
    ],
    totalPrice: 15.47,
    status: "pending",
  },
  {
    cart_id: "c5002",
    u_id: "u002",
    items: [
      {
        item_id: "p02",
        quantity: 1,
      },
      {
        item_id: "p03",
        quantity: 1,
      },
    ],
    totalPrice: 10.48,
    status: "completed",
  },
];

export default orders;