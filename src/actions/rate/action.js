/** @format */

import { rateActionType } from "./actionType";

export const setRate = (rate) => {
  return async (dispatch) => {
    dispatch({ type: rateActionType.setRate, rateValue: rate });
  };
};
