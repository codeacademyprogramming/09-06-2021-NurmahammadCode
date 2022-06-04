import axios from "axios";
import { Dispatch } from "redux";
import { ICard, ICardDispatch, ICosts, IWallet } from "../models/types";
import { ADD_CARD, ADD_COST } from "./constants";

const BASE_URL = "http://localhost:8080";

interface IActionAddCard {
  type: "ADD_CARD";
  payload: ICard;
}

interface IActionAddCost {
  type: "ADD_COST";
  payload: ICosts;
}

export const addCard = (payload: ICard) => (dispatch: Dispatch) => {
  axios
    .post(`${BASE_URL}/cards/add`, payload)
    .then((response) =>
      dispatch({
        type: ADD_CARD,
        payload: response,
      })
    )
    .catch((err) => console.error(err));
};

export const addCost = (payload: ICosts) => (dispatch: Dispatch) => {
  axios
    .post(`${BASE_URL}/costs/add`, payload)
    .then((response) =>
      dispatch({
        type: ADD_COST,
        payload: response,
      })
    )
    .catch((err) => console.error(err));
};

export type Actions = IActionAddCard | IActionAddCost;

export type DispatchType = (args: IWallet) => IWallet;
