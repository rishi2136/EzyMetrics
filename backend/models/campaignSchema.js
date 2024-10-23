import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const campaignSchema = new Schema({
  campaign_name: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  budget: { type: Number, required: true },
  spent: { type: Number, required: true },
  impressions: { type: Number },
  clicks: { type: Number },
  conversions: { type: Number },
  status: {
    type: String,
    enum: ["active", "hold", "completed"],
    required: true,
  },
  platform: { type: String, required: true },
  target_audience: { type: String },
  created_at: { type: Date, default: Date.now },
});

const Campaign = model("Campaign", campaignSchema);
export default Campaign;
