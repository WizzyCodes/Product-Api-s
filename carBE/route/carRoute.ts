import express, { Request, Response } from "express";
import { createAllCar, getAllCar } from "../controller/carController";

const router = express.Router();
router.route("/api/get-bed").get(getAllCar);
router.route("/api/create-bed").post(createAllCar);

export default router;
