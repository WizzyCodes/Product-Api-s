import express, { Request, Response } from "express";
import { createAllSoap, getAllSoap } from "../controller/soapController";

const router = express.Router();

router.route("/api/get-soap").get(getAllSoap);
router.route("/api/create-soap").post(createAllSoap);
export default router;
