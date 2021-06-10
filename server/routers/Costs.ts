import { Router } from "express";
import { ECardType } from "../types/types";
import { CardsRouter } from "./Cards";
const Costs = require("../models/CostsModel");
const Cards = require("../models/CardsModel");

export const CostRouter = Router();

CostRouter.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const singleCard = await Cards.findById(id);
  res.send(singleCard);
});

CostRouter.post("/add", async (req, res, next) => {
  const card = await Cards.findById(req.body.CardID);

  const cost = new Costs({
    CardID: req.body.CardID,
    Amount: req.body.Amount,
    CostType: req.body.CostType,
  });
  console.log(cost);
  const cards = await Cards.updateOne(
    { _id: req.body.CardID },
    { $push: { Costs: cost } }
  );

  //   const query = { _id: req.body.CardID };
  //   const updateDocument = {
  //     $push: { "items.$[].Costs": cost },
  //   };
  //   const result = await Cards.updateOne(query, updateDocument);
  //   const cards = await Cards.find();
  res.send(cards);
});
