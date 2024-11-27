import express, { Request, Response } from "express";
import { createAllChair, getAllChair } from "../controller/chairController";

const router = express.Router();
router.route("/api/get-bag").get(getAllChair);
router.route("/api/create-chair").post(createAllChair);

export default router;
