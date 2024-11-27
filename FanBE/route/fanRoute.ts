import { Router } from "express";
import { createAllBag, getAllBag } from "../controller/FanController";

const router = Router();

router.route("api/get-bag").get(getAllBag);
router.route("/api/create-bag").post(createAllBag);

export default router;
