import express, { Request, Response } from "express";
import { createAllBed, getAllBed } from "../controller/bedController";

const router = express.Router();
router.route("/api/get-bed").get(getAllBed);
router.route("/api/create-bed").post(createAllBed);

export default router;
