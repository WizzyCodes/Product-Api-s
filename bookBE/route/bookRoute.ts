import express, { Request, Response } from "express";
import { createAllBook, getAllBook } from "../controller/bookController";

const router = express.Router();

router.route("/api/get-soap").get(getAllBook);
router.route("/api/create-soap").post(createAllBook);
export default router;
