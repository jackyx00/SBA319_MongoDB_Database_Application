import Product from "../models/productSchema.js";
import originalProducts from "../seed/products.js";

// GET all products
async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// POST create product
async function createProduct(req, res) {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// PUT update product contents by unique mongodb property _id
async function updateProduct(req, res) {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// DELETE delete a specified product by item_id
async function deleteProduct(req, res) {
  try {
    const result = await Product.deleteOne({ item_id: req.params.id });
    res.json(result);
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// seed database using mongoose
async function resetProductData(req, res) {
  try {
    const resultDelete = await Product.deleteMany();
    const resultInsert = await Product.insertMany(originalProducts);
    console.log({ ...resultDelete, ...resultInsert });
    res.json("successful");
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
}

// renaming the functions in the export
export default {
  list: getProducts,
  create: createProduct,
  update: updateProduct,
  delete: deleteProduct,
  seed: resetProductData,
};
