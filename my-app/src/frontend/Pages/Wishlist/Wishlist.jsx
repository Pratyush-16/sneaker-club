import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'
import { AuthContext } from '../../Context/AuthContext';
import { removeFromWishlist } from '../../Services/WishlistServices';

export const  Wishlist =()=> {

  // const {wishlist , setWishlist} = useContext(DataContext)
  const{token} = useContext(AuthContext)
  const { state, dispatch} = useContext(DataContext);

  


  return (
     <div>
      <h2 className="heading-center">My Wishlist {state.wishlist.length}</h2>

      <div className="cart-container">
        {state.wishlist?.map((item) => (
          <div className="category-card">
            <img src={item.image} alt="shoes" className="cardImage" />
            <p>Brand: {item.brand}</p>
            <p>Price: ${item.original_price}</p>


            
            <button className="wishlist--remove-Btn" onClick={()=> removeFromWishlist(item._id,token,dispatch)}>Remove from Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  )}