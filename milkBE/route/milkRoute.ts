import express, { Request, Response } from "express";
import { createAllMilk, getAllMilk } from "../controller/milkController";

const router = express.Router();

router.route("/api/get-milk").get(getAllMilk);
router.route("/api/create-milk").post(createAllMilk);

export default router;
