import { Router } from "express";
import { createAllBags, getAllBags } from "../controller/bagController";

const router = Router();
router.route("/api/get-bag").get(getAllBags);
router.route("/api/create-bag").post(createAllBags);
export default router;
