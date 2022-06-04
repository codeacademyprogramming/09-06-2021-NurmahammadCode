import mongoose, { model } from "mongoose";
import { ECostType, ICosts } from "../types/types";

export const ICostsSchema = new mongoose.Schema<ICosts>({
  CardID: { type: String, required: true },
  Amount: { type: String, required: true },
  CostType: { type: ECostType, required: true },
});

module.exports = mongoose.model("Costs", ICostsSchema);
