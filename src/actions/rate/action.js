/** @format */

import { rateActionType } from "./actionType";

export const setRate = (rate) => {
  return async (dispatch, getState) => {
    dispatch({ type: rateActionType.setRate, score: rate });
  };
};
