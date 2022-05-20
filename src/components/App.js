/** @format */

import Modal from "./Modal";
import Navcolor from "./colorNavBar";
import { useSelector } from "react-redux";

const App = () => {
  const themeController = useSelector((store) => store.theme);
  console.log(themeController);
  return (
    <div className={themeController.theme}>
      <Navcolor />
      <Modal />
    </div>
  );
};
export default App;
