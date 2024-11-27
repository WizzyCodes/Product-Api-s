import express, { Request, Response } from "express";
import { createAllPen, getAllPen } from "../controller/penController";

const router = express.Router();
router.route("/api/get-pen").get(getAllPen);
router.route("/api/create-pen").post(createAllPen);

export default router;
