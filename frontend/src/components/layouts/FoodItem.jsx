import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addItemToCart,
  removeItemFromCart,
  updateCartQuantity,
} from "../../actions/cartAction";

export default function FoodItem({ fooditem, restaurant }) {
  const [quantity, setQuantity] = useState(1);
  const [showButtons, setShowButtons] = useState(false);

  // const authentication = useSelector((state) => state.auth.iuser)
  // const user = useSelector((state) => state.auth.user)
  // better: destructure; user and isAuthenticated are key, in key-value pair object hting
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const cartItems = useSelector((state) => state.cart.cartItems); //  here we don't need to de-structure it because we're already accessing using '.'

  useEffect(() => {
    if(!cartItems) return
    // capital foodItem is coming from the cartItem, fooditem is the props one
    const cartItem = cartItems.find(
      (item) => item.foodItem._id === fooditem._id
    );
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setShowButtons(true);
    } else {
      setQuantity(1);
      setShowButtons(false);
    }
  }, [cartItems, fooditem]);

  const increaseQty = () => {
    if (quantity < fooditem.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      dispatch(updateCartQuantity(fooditem._id, newQuantity, alert));
    } else {
      alert.error("Exceed stock Limit");
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateCartQuantity(fooditem._id, newQuantity, alert));
    } else {
      setQuantity(0);
      setShowButtons(false);
      dispatch(removeItemFromCart(fooditem._id));
    }
  };

  const addToCartHandler = () => {
    // if u r not logged in and you press add to cart, you will be directed to login page
    if (!isAuthenticated && !user) {
      return navigate("/users/login");
    }
    if (fooditem && fooditem._id) {
      dispatch(addItemToCart(fooditem._id, restaurant, quantity, alert));
      setShowButtons(true);
    } else {
      console.error("Food item id is not defined");
    }
  };

  return (
    <div className="col-sm-12 col-md-5 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src={fooditem.images[0].url}
          alt={fooditem.name}
          className="card-img-top mx-auto"
        />
        {/* Cavolo nero orecchiette */}
        {/*  */}

        {/* heading and description */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-tittle">{fooditem.name}</h5>
          <p className="fooditem_des">{fooditem.description}</p>
          <div className="card-text">
            <LiaRupeeSignSolid />
            {fooditem.price}
            <br />

            {!showButtons ? (
              <button
                type="button"
                id="cart_btn"
                className="btn btn-primary d-inline ml-4"
                disabled={fooditem.stock === 0}
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            ) : (
              <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" onClick={decreaseQty}>
                  -
                </span>

                <input
                  type="number"
                  className="form-control count d-inline"
                  value={quantity}
                  readOnly
                />
                <span className="btn btn-primary plus" onClick={increaseQty}>
                  +
                </span>
              </div>
            )}

            <br />
            <p>
              Status:{" "}
              <span
                id="stock_status"
                className={fooditem.stock ? "greenColor" : "redColor"}
              >
                {fooditem.stock ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
