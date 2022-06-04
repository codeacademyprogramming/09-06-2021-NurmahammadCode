import { IWallet } from "../models/types";
import { Actions } from "./actions";
import { ADD_CARD, ADD_COST } from "./constants";

const initialState: IWallet = {
  cards: [],
  costs: [],
};

export default function walletReducer(
  state: IWallet = initialState,
  action: Actions
): IWallet {
  switch (action.type) {
    case ADD_CARD: {
      const cardsCopy = { ...state.cards };
      cardsCopy.push(action.payload);
      return { ...state, cards: cardsCopy };
    }
    case ADD_COST: {
      const costCopy = { ...state.costs };
      costCopy.push(action.payload);
      return { ...state, costs: costCopy };
    }
    default:
      return state;
  }
}
