import express, { Request, Response } from "express";
import { createAllCream, getAllCream } from "../controller/creamController";

const router = express.Router();

router.route("/api/get-cream").get(getAllCream);
router.route("/api/create-cream").post(createAllCream);
export default router;
