import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";
import { removeFromWishlist } from "../../Services/WishlistServices";
import { addToCart, updateQuantityInCart } from "../../Services/CartServices";

export const Wishlist = () => {
  // const {wishlist , setWishlist} = useContext(DataContext)
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);


  // const wishlistHandler = ()=> {
  
  // }
  // const addToCartfromWishlist = (idToFind)=> {
  //     const isInCart = state.cart.find(({_id})=> _id === idToFind)
  //     console.log(isInCart)
  // }
  const isInCart =(idToFind)=> {
    const cartfind=  state.cart.find(({_id})=> _id === idToFind)
    console.log(cartfind)
    return cartfind
    
    //console.log(cart)
  }

  return (
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

              <button onClick={() =>  {isInCart(item._id) ? updateQuantityInCart(item._id,token,dispatch,"increment") : addToCart(item,token,dispatch)}}>Add to Cart</button>
              {/* <button>add to cart </button> */}
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
