import express, { Request, Response } from "express";
import { createAllSugar, getAllSugar } from "../controller/sugarController";

const router = express.Router();
router.route("/api/get-sugar").get(getAllSugar);
router.route("/api/create-sugar").post(createAllSugar);

export default router;
