/** @format */

import { themeActionType } from "./actionType";
const initialState = {
  theme: "orange-theme",
};
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeActionType.changeTheme:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return {
        ...state,
      };
  }
};
