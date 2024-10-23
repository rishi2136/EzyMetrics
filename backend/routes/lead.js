import express from "express";
import { getAllLead, getLeadWithId } from "../controllers/lead.js";
export const router = express.Router();

router.get("/info", getAllLead);

// in case if needed
router.get("/:id", getLeadWithId);
