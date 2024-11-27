import express, { Request, Response } from "express";
import { createAllPhone, getAllPhone } from "../controller/phoneController";

const router = express.Router();

router.route("/api/get-phone").get(getAllPhone);
router.route("/api/create-phone").post(createAllPhone);

export default router;
