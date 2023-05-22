import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'

export const  Wishlist =()=> {

  const {wishlist , setWishlist} = useContext(DataContext)

  const removeFromWishlistHandler =(id)=> {
     setWishlist(wishlist.filter((wishlistItems) => wishlistItems.id !== id))
  }


  return (
     <div>
      <h2 className="heading-center">My Wishlist</h2>

      <div className="cart-container">
        {wishlist?.map((item) => (
          <div className="category-card">
            <img src={item.image} alt="shoes" className="cardImage" />
            <p>Brand: {item.brand}</p>
            <p>Price: ${item.original_price}</p>

            
            <button className="cart-Btn" onClick={()=> removeFromWishlistHandler(item.id)}>Remove from Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  )}