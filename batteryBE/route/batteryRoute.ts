import express, { Request, Response } from "express";
import {
  createAllBattery,
  getAllBattery,
} from "../controller/batteryController";

const router = express.Router();
router.route("/api/get-battery").get(getAllBattery);
router.route("/api/create-battery").post(createAllBattery);

export default router;
