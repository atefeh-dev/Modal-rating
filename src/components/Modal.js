/** @format */
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const rateController = useSelector((store) => store.rate);
  console.log(rateController);
  return (
    <div className="container">
      <form className="modal-rating">
        <div className="overlay">
          <i className="fa-solid fa-star"></i>
          <h2> What do you think of it?</h2>
          <p>
            Thank you for giving us an objective opinion in order to help us
            improve!
          </p>
          <div className="rating">
            <input type="radio" name="rate" id="rate-1" value="1" required />
            <label htmlFor="rate-1">1</label>

            <input type="radio" name="rate" id="rate-2" value="2" required />
            <label htmlFor="rate-2">2</label>

            <input type="radio" name="rate" id="rate-3" value="3" required />
            <label htmlFor="rate-3">3</label>

            <input type="radio" name="rate" id="rate-4" value="4" required />
            <label htmlFor="rate-4">4</label>

            <input type="radio" name="rate" id="rate-5" value="5" required />
            <label htmlFor="rate-5">5</label>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Modal;
