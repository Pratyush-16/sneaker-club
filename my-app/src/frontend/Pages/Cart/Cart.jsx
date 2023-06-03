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

// const cart = [nike, addidas, ]

export const Cart = () => {
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);

  return (
    <div>
      <h2 className="heading-center">My Cart {state.cart.length}</h2>

      <div className="cart-container">
        {state.cart?.map((item) => (
          <div className="category-cardd">
            <div className="cart-prod-image">
              <img src={item.image} alt="shoes" className="cardImage" />
            </div>

            <div className="cart-prod-details">
              <p>Brand: {item.brand}</p>
              <p>Price: ${item.original_price}</p>

              <p>Qty: {item.qty}</p>
              <button
                onClick={() =>
                  updateQuantityInCart(item._id, token, dispatch, "increment")
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  updateQuantityInCart(item._id, token, dispatch, "decrement")
                }
                disabled={item.qty === 1}
              >
                {" "}
                -{" "}
              </button>

              <div className="button-cart">
                <button
                  className="cart-Btn"
                  onClick={() => removeFromCart(item._id, token, dispatch)}
                >
                  Remove from Cart
                </button>
                <button
                  className="cart-Btn"
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
        ))}
      </div>
      <div className="cart-price">
        <CartPrice />
      </div>

      <div></div>
    </div>
  );
};
