import clickedReducer from "./isClicked";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isClicked: clickedReducer,
});

export default allReducers;
