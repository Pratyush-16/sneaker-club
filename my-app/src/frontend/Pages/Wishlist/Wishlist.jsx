import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";
import { removeFromWishlist } from "../../Services/WishlistServices";
import { addToCart, updateQuantityInCart } from "../../Services/CartServices";
import { isInCart } from "../../Utils/cart";
import { TOAST_PARAMS } from "../../Utils/utils";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();

  const isInCart = (idToFind) => {
    const cartfind = state.cart.find(({ _id }) => _id === idToFind);

    return cartfind;
  };

  return (
    <div>
      {

        state.wishlist.length ===0 ?(
          <div>
         <h1 className="title text-center"> Your WishList Is Empty </h1>
         <button onClick={()=>navigate('/allproduct') }>Go To Shopping</button>
         </div>
      ):(
      
        <div>

      <h2 className="heading-center">My Wishlist {state.wishlist.length}</h2>

      <div className="wishlist-container">
        {state.wishlist?.map((item) => (
          <div className="category-cardd">
            <div className="wishlist-prod-img">
              <img src={item.image} alt="shoes" className="cardImage" />
            </div>

            <div className="wishlist-prod-details">
              <p>Brand: {item.brand}</p>
              <p>Price: ${item.original_price}</p>

              <div className="button-wishlist">
                <button
                  className="wishlist--remove-Btn"
                  onClick={() => removeFromWishlist(item._id, token, dispatch)}
                >
                  Remove from Wishlist
                </button>

                <button
                  onClick={() => {
                    isInCart(item._id)
                      ? updateQuantityInCart(
                          item._id,
                          token,
                          dispatch,
                          "increment"
                        )
                      : addToCart(item, token, dispatch);
                      toast.success("Added To Cart", TOAST_PARAMS);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )}
    </div>
  );
};
