import clickedReducer from "./isClicked";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  clickedReducer,
});

export default allReducers;
