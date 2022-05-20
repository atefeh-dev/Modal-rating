/** @format */

import { rateActionType } from "./actionType";
import { dateTimenNow } from "../../functions/dateTimeNow";
const initialState = {
  rates: [
    {
      name: "Atefeh",
      score: "5",
      dateTime: "2022-5-20 10:20:40",
    },
  ],
};
export const rateReducer = (state = initialState, action) => {
  console.log(action.rate);

  switch (action.type) {
    case rateActionType.setRate:
      return {
        ...state,
        rates: [
          ...state.rates,
          {
            name: "Sadra",
            score: action.score,
            dateTime: dateTimenNow(),
          },
        ],
      };
    default:
      return {
        ...state,
      };
  }
};
