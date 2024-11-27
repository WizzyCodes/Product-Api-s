import express, { Request, Response } from "express";
import { createAllTable, getAllTable } from "../controller/tableController";

const router = express.Router();
router.route("/api/get-table").get(getAllTable);
router.route("/api/create-table").post(createAllTable);

export default router;
