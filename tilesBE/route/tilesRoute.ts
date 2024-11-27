import express, { Request, Response } from "express";
import { createAllTiles, getAllTiles } from "../controller/tilesController";

const router = express.Router();
router.route("/api/get-tiles").get(getAllTiles);
router.route("/api/create-tiles").post(createAllTiles);

export default router;
