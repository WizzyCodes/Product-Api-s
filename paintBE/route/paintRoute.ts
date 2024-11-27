import express, { Request, Response } from "express";
import { createAllPaint, getAllpaint } from "../controller/paintController";

const router = express.Router();
router.route("/api/get-paint").get(getAllpaint);
router.route("/api/create-paint").post(createAllPaint);

export default router;
