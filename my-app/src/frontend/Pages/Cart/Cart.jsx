import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { products } from "../../../backend/db/products";
import "../Cart/Cart.css";

// const cart = [nike, addidas, ]

export const Cart = () => {
  const {  cart, setCart,wishlist,setWishlist } = useContext(DataContext);
  //const  cartProd = [...sneakers.cartList]

  const removeFromCartHandler = (id)=> {
    setCart(cart.filter((cartItems) => cartItems.id !== id));
  }

  const addToWishlistHandler = (item)=> {
    setWishlist([...wishlist,item])
  }

  return (
    <div>
      <h2 className="heading-center">My Cart</h2>

      <div className="cart-container">
        {cart?.map((item) => (
          <div className="category-card">
            <img src={item.image} alt="shoes" className="cardImage" />
            <p>Brand: {item.brand}</p>
            <p>Price: ${item.original_price}</p>

            <button className="cart-Btn" onClick={()=> removeFromCartHandler(item.id)}>Remove from Cart</button>
            <button className="cart-Btn" onClick={()=> addToWishlistHandler(item)}>Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};
