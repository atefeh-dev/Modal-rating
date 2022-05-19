/** @format */

import { rateActionType } from "./actionType";
const initialState = {
  rates: [
    {
      name: "atefeh",
      score: "5",
      dateTime: "3/5/2020",
    },
  ],
};
export const rateReducer = (state = initialState, action) => {
  switch (action.type) {
    case rateActionType.setRate:
      return {
        ...state.rates,
        name: "atefe",
        score: action.rateValue,
        dateTime: "00-00",
      };
    default:
      return {
        ...state.rates,
      };
  }
};
