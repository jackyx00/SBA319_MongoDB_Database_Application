import Order from "../models/orderSchema.js";
import originalOrders from "../seed/orders.js";

// GET all orders
async function getOrders(req, res) {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// POST create order
async function createOrder(req, res) {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// PUT update order contents by unique mongodb property _id
async function updateOrder(req, res) {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// DELETE delete a specified order by cart_id
async function deleteOrder(req, res) {
  try {
    const result = await Order.deleteOne({ cart_id: req.params.id });
    res.json(result);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// seed database using mongoose
async function resetOrderData(req, res) {
  try {
    const resultDelete = await Order.deleteMany();
    const resultInsert = await Order.insertMany(originalOrders);
    console.log({ ...resultDelete, ...resultInsert });
    res.json("successful");
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// renaming the functions in the export
export default {
  list: getOrders,
  create: createOrder,
  update: updateOrder,
  delete: deleteOrder,
  seed: resetOrderData,
};
