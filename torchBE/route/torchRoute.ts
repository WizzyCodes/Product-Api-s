import express, { Request, Response } from "express";
import { createAllTorch, getAllTorch } from "../controller/torchController";

const router = express.Router();
router.route("/api/get-torch").get(getAllTorch);
router.route("/api/create-torch").post(createAllTorch);

export default router;
