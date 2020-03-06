import { combineReducers } from "redux";
import cards from "./cards-reducer";

const RootReducer = combineReducers({ cards: cards });

export default RootReducer;
