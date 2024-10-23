import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const leadSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  status: { type: String, required: true }, // new | converted | lost
  created_at: { type: Date, default: Date.now },
  assigned_to: { type: String },
  last_contacted: { type: Date },
  notes: { type: String },
  campaign_id: { type: Schema.Types.ObjectId, ref: "Campaign", required: true },
});

const Lead = model("Lead", leadSchema);
export default Lead;
