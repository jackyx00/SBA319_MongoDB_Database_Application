import express from "express";
import orderController from "../controllers/orderController.js";

const router = express.Router();

router.get("/cartList/:id", orderController.cartList);
router.post("/create", orderController.create);
router.put("/update/:id", orderController.update);
router.delete("/delete/:id", orderController.delete);
router.get("/seed", orderController.seed);

export default router;