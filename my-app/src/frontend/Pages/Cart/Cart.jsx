import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { products } from "../../../backend/db/products";
import "../Cart/Cart.css";
import { AuthContext } from "../../Context/AuthContext";

// const cart = [nike, addidas, ]

export const Cart = () => {

  const{token} = useContext(AuthContext)
  const { sneakers, state} = useContext(DataContext);
  

  
  return (
    <div>
      <h2 className="heading-center">My Cart {state.cart.length}</h2>

      <div className="cart-container">
        {state.cart?.map((item) => (
          <div className="category-card">
            <img src={item.image} alt="shoes" className="cardImage" />
            <p>Brand: {item.brand}</p>
            <p>Price: ${item.original_price}</p>
 
            {/* <button className="cart-Btn" onClick={()=> removeFromCartHandler(item.id)}>Remove from Cart</button> */}
            <button className="cart-Btn" onClick={()=> addToWishList(products,token, dispatch)}>Add to Wishlist</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};
