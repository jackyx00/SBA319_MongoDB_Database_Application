import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    item_id: { type: String, required: true },
    quantity: { type: Number, default: 1 }
})

const orderSchema = new mongoose.Schema({
  cart_id: { type: String, required: true },
  u_id: { type: String, required: true },
  items: [itemSchema],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
});

const Order = mongoose.model("Order", orderSchema, "orders");

export default Order;