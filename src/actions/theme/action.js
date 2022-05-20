/** @format */

import { themeActionType } from "./actionType";

export const changeTheme = (theme) => {
  return async (dispatch) => {
    dispatch({ type: themeActionType.changeTheme, theme: theme });
  };
};
