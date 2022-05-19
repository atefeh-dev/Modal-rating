/** @format */
import { useDispatch, useSelector } from "react-redux";
import { setRate } from "../actions/rate/action";
import { useState } from "react";
const Modal = () => {
  const rateController = useSelector((store) => store.rate);
  const dispatch = useDispatch();

  const [currentRadioValue, setCurrentRadioValue] = useState();
  console.log(rateController);

  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setRate(currentRadioValue));
  };

  return (
    <div className="container">
      <form className="modal-rating" onSubmit={(e) => handleSubmit(e)}>
        <div className="overlay">
          <i className="fa-solid fa-star"></i>
          <h2> What do you think of it?</h2>
          <p>
            Thank you for giving us an objective opinion in order to help us
            improve!
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rate"
              id="rate-1"
              value="1"
              required
              onChange={handleRadioChange}
              checked={currentRadioValue === "1"}
            />
            <label htmlFor="rate-1">1</label>

            <input
              type="radio"
              name="rate"
              id="rate-2"
              value="2"
              required
              onChange={handleRadioChange}
              checked={currentRadioValue === "2"}
            />
            <label htmlFor="rate-2">2</label>

            <input
              type="radio"
              name="rate"
              id="rate-3"
              value="3"
              required
              onChange={handleRadioChange}
              checked={currentRadioValue === "3"}
            />
            <label htmlFor="rate-3">3</label>

            <input
              type="radio"
              name="rate"
              id="rate-4"
              value="4"
              required
              onChange={handleRadioChange}
              checked={currentRadioValue === "4"}
            />
            <label htmlFor="rate-4">4</label>

            <input
              type="radio"
              name="rate"
              id="rate-5"
              value="5"
              required
              onChange={handleRadioChange}
              checked={currentRadioValue === "5"}
            />
            <label htmlFor="rate-5">5</label>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Modal;
