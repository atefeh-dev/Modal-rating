/** @format */

import { combineReducers } from "redux";
import { rateReducer } from "../actions/rate/reducer";
import { themeReducer } from "../actions/theme/reducer";

export default combineReducers({
  rate: rateReducer,
  theme: themeReducer,
});
