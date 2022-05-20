/** @format */

import Modal from "./Modal";
import ColorNavbarBar from "./ColorNavBar";
import { useSelector } from "react-redux";

const App = () => {
  const themeController = useSelector((store) => store.theme);
  console.log(themeController);
  return (
    <div className={themeController.theme}>
      <ColorNavbarBar />
      <Modal />
    </div>
  );
};
export default App;
