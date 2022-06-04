import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { IWallet } from "../models/types";
import { Actions, DispatchType } from "./actions";
import walletReducer from "./reducer";

const store: Store<IWallet, Actions> & {
  dispatch: DispatchType;
} = createStore(walletReducer, applyMiddleware(thunk));

export default store;
