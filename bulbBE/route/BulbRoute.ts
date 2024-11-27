import express, { Request, Response } from "express";
import { createAllBulb, getAllBulb } from "../controller/bulbController";
const router = express.Router();

router.route("/api/get-bulb").get(getAllBulb);
router.route("/api/create-bulb").post(createAllBulb);

export default router;
