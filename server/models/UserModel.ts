import mongoose from "mongoose";
import { IUser } from "../types/types";

export const IUserSchema = new mongoose.Schema<IUser>({
  UserName: { type: String, required: true },
  Password: { type: String, required: true },
  Cards: { type: [], required: true },
});

module.exports = mongoose.model("User", IUserSchema);
