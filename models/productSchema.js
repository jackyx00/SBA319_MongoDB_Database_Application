import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  item_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  unit: { type: String, default: "per item" },
  stock: { type: Number, required: true, min: 0 }
});

const Product = mongoose.model("Product", productSchema, "products");

export default Product;