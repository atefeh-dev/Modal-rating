/** @format */

import { combineReducers } from "redux";
import { rateReducer } from "../actions/rate/reducer";

export default combineReducers({
  rate: rateReducer,
});
