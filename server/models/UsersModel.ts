import mongoose from "mongoose";
import { IUser, IUsers } from "../types/types";

export const IUsersSchema = new mongoose.Schema<IUsers>({
  users: { type: [], required: true },
});

module.exports = mongoose.model("Users", IUsersSchema);
