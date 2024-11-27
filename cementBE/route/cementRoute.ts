import express, { Request, Response } from "express";
import { createAllCement, getAllCement } from "../controller/cementController";

const router = express.Router();
router.route("/api/get-cement").get(getAllCement);
router.route("/api/create-cement").post(createAllCement);

export default router;
