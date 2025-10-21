import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/seed", userController.seed);

export default router;