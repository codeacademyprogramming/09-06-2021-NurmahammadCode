import mongoose from "mongoose";
import { ECardType, ICard, ICosts } from "../types/types";

const ICardSchema = new mongoose.Schema<ICard[]>({
  // _id: { type: String, required: true, unique: true },
  CardNumber: { type: Number, required: true },
  ExpData: { type: Date, required: true },
  cvv: { type: Number, required: true },
  BankName: { type: String, required: true },
  CardType: { type: ECardType, required: true },
  Costs: { type: [], required: true },
});

module.exports = mongoose.model("Cards", ICardSchema);
