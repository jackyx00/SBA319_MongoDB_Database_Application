const orders = [
  {
    cart_id: "c5001",
    u_id: "u001",
    items: [
      { item_id: "p01", quantity: 2 },
      { item_id: "p05", quantity: 1 },
    ],
    totalPrice: 12.97,
    status: "pending",
  },
  {
    cart_id: "c5002",
    u_id: "u002",
    items: [
      { item_id: "p03", quantity: 1 },
      { item_id: "p04", quantity: 2 },
    ],
    totalPrice: 12.47,
    status: "completed",
  },
  {
    cart_id: "c5003",
    u_id: "u003",
    items: [
      { item_id: "p02", quantity: 1 },
      { item_id: "p05", quantity: 2 },
    ],
    totalPrice: 10.97,
    status: "pending",
  },
  {
    cart_id: "c5004",
    u_id: "u001",
    items: [
      { item_id: "p03", quantity: 2 },
      { item_id: "p04", quantity: 1 },
    ],
    totalPrice: 14.47,
    status: "completed",
  },
  {
    cart_id: "c5005",
    u_id: "u002",
    items: [
      { item_id: "p01", quantity: 1 },
      { item_id: "p02", quantity: 1 },
      { item_id: "p05", quantity: 1 },
    ],
    totalPrice: 12.97,
    status: "cancelled",
  },
];

export default orders;
