/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../actions/theme/action";
const ColorNavbarBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="NavColor">
      <div
        className="color-box yellow"
        onClick={() => dispatch(changeTheme("yellow-theme"))}></div>
      <div
        className="color-box blue"
        onClick={() => dispatch(changeTheme("blue-theme"))}></div>
      <div
        className="color-box orange"
        onClick={() => dispatch(changeTheme("orange-theme"))}></div>
      <div
        className="color-box red"
        onClick={() => dispatch(changeTheme("red-theme"))}></div>
    </div>
  );
};
export default ColorNavbarBar;
