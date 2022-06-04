import { Router } from "express";
import { ECardType } from "../types/types";
import { CardsRouter } from "./Cards";
import { UserRouter } from "./User";
const Users = require("../models/UserModel");

export const UsersRouter = Router();

UsersRouter.get("/", async (req, res, next) => {
  const users = await Users.find();
  res.send(users);
});

// UsersRouter.post("/add", async (req, res, next) => {
//   const card = await Cards.findById(req.body.CardID);

//   const cost = new Costs({
//     CardID: req.body.CardID,
//     Amount: req.body.Amount,
//     CostType: req.body.CostType,
//   });
//   console.log(cost);
//   const cards = await Cards.update(
//     { _id: req.body.CardID },
//     { $push: { Costs: cost } }
//   );

//   //   const query = { _id: req.body.CardID };
//   //   const updateDocument = {
//   //     $push: { "items.$[].Costs": cost },
//   //   };
//   //   const result = await Cards.updateOne(query, updateDocument);
//   //   const cards = await Cards.find();
//   res.send(cards);
// });
