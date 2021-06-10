import { Router } from "express";
import { ECardType } from "../types/types";
import { CardsRouter } from "./Cards";
const Costs = require("../models/CostsModel");
const Cards = require("../models/CardsModel");
const Users = require("../models/UsersModel");
const User = require("../models/UserModel");

export const UserRouter = Router();

UserRouter.post("/registiration", async (req, res, next) => {
  const users = await Users.find();
  const user = new User({
    UserName: req.body.UserName,
    Password: req.body.Password,
    Cards: [],
  });

  if (users.length === 0) {
    const usersSchema = new Users({
      users: [user],
    });
    usersSchema.save();
  } else {
    await Users.updateOne({}, { $push: { users: user } });
  }

  res.json(user);
});

UserRouter.post("/login", async (req, res, next) => {
  const username = req.body.UserName;
  const password = req.body.Password;
  const users = await Users.find();
  const isLoginSuccess = users[0].users.find((user, index) => {
    if (user.UserName == username && user.Password == password) {
      return true;
    }
  });
  res.send(isLoginSuccess ? "success" : "failed");
});

// UserRouter.post("/add", async (req, res, next) => {
//   const users = new Users({
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
