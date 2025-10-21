import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/list", productController.list);
router.post("/create", productController.create);
router.put("/update/:id", productController.update);
router.delete("/delete/:id", productController.delete);
router.get("/seed", productController.seed);

export default router;