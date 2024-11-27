import express, { Request, Response } from "express";
import { createAllBelt, getAllBelt } from "../controller/beltController";

const router = express.Router();
router.route("/api/get-belt").get(getAllBelt);
router.route("/api/create-belt").post(createAllBelt);

export default router;
