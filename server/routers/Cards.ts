import { Router } from "express";
import { ECardType } from "../types/types";
const Cards = require("../models/CardsModel");
const Users = require("../models/UsersModel");

export const CardsRouter = Router();

CardsRouter.get("/", async (req, res, next) => {
  const cards = await Cards.find();
  res.json(cards);
});

CardsRouter.post("/add", async (req, res, next) => {
  const id = "60c141e6430c24038c9959d6";
  const card = new Cards({
    CardNumber: req.body.CardNumber,
    ExpData: req.body.ExpData,
    cvv: req.body.cvv,
    BankName: req.body.BankName,
    CardType: req.body.CardType,
    Costs: req.body.Costs,
  });
  const sers = await Users.find();
  sers[0].users[0].UserName = "Ilham";
  const updatedServ = await sers.save();
  console.log(updatedServ[0].users[0].UserName);
  res.send(card);
});
