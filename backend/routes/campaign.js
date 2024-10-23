import express from "express";
export const router = express.Router();
import { getAllCampaign, getCampaignWithId, addCampaign } from "../controllers/campaign.js";

router.get("/info", getAllCampaign);
router.post("/add", addCampaign)

// in case if needed
router.get("/:id", getCampaignWithId);

