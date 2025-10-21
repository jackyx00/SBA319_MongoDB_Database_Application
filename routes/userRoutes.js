import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/list", userController.list);
router.post("/create", userController.create);
router.put("/update/:id", userController.update);
router.delete("/delete/:userId", userController.delete);
router.get("/seed", userController.seed);

export default router;