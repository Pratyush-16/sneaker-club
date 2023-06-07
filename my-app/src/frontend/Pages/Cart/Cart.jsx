import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { products } from "../../../backend/db/products";
import "../Cart/Cart.css";
import { AuthContext } from "../../Context/AuthContext";
import { addToWishlist } from "../../Services/WishlistServices";
import {
  removeFromCart,
  updateQuantityInCart,
} from "../../Services/CartServices";
import { CartPrice } from "./CartPrice";
import { TOAST_PARAMS } from "../../Utils/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// const cart = [nike, addidas, ]

export const Cart = () => {
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div>
      {state.cart.length === 0 ? (
        <div className="">
          <h1 className="title text-center"> Your Cart Is Empty </h1>
          <button onClick={() => navigate("/allproduct")}>
            Go To Shopping
          </button>
        </div>
      ) : (
        <div className="main-cart-container">
         
          <div className="cart-container">
            <h2 className="heading-center">My Cart {state.cart.length}</h2>
    
            {state.cart?.map((item) => (
              <div className="category-cardd">
                <div className="cart-prod-image">
                  <img src={item.image} alt="shoes" className="cardImage" />
                </div>

                <div className="cart-prod-details">
                  <p>Brand: {item.brand}</p>
                  <p>Price: ${item.original_price}</p>

                  <p>Qty: {item.qty}</p>

                  <div className="button-increment-decrement">
                  <button
                    onClick={() => {
                      updateQuantityInCart(
                        item._id,
                        token,
                        dispatch,
                        "increment"
                      );
                      toast.success("Added One More ", TOAST_PARAMS);
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => {
                      updateQuantityInCart(
                        item._id,
                        token,
                        dispatch,
                        "decrement"
                      );
                      toast.success("Removed From Cart", TOAST_PARAMS);
                    }}
                    disabled={item.qty === 1}
                  >
                    {" "}
                    -{" "}
                  </button>
                  </div>


                    <div className="button-cart-wishlist-main">
                  <div className="button-cart">
                    <button
                      className="cart-Btn"
                      onClick={() => removeFromCart(item._id, token, dispatch)}
                    >
                      Remove from Cart
                    </button>
                    <button
                      className="button-wishlist"
                      onClick={() => {
                        addToWishlist(item, token, dispatch);
                        removeFromCart(item._id, token, dispatch);
                      }}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-price">
            <CartPrice />
          </div>

          <div></div>
        </div>
      )}
    </div>
  );
};
