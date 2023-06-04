import React, { useContext } from "react";
import Filter from "../../Components/Filters/Filter";
import { DataContext } from "../../Context/DataContext";
import { addToCart } from "../../Services/CartServices";
import { products } from "../../../backend/db/products";
import { AuthContext } from "../../Context/AuthContext";
import { addToWishlist } from "../../Services/WishlistServices";
import { Navigate, useNavigate } from "react-router-dom";
import { filterItems } from "../../Utils/filterFunction";


export const AllProduct = () => {
  const { state, sneakers ,dispatch, wishlist, setWishlist} = useContext(DataContext);
  const {token} = useContext(AuthContext)

 
  const filteredData = filterItems(state)

   const isInCart =(idToFind)=> {
    const cartfind=  state.cart.find(({_id})=> _id === idToFind)
    //console.log(cartfind)
    return cartfind
    

  }
  
  const isInWishlist = (idToFind)=> {
     const wishlistFind = state.wishlist.find(({_id})=> _id ===idToFind)
    //console.log(wishlistFind)
    return wishlistFind;
  }
 const navigate = useNavigate()

  return (
  
     
     <div className="filter-container">
     <Filter />

     
      
      <div className="productCard">
        {filteredData?.map((shoes) => (
          <div key={shoes._id} className="prod-card">
            <img src={shoes.image} alt="shoes" className="shoes-images"  onClick={()=>navigate (`/allproduct/${shoes._id}`)}/>
            <p>{shoes.brand}</p>
            <p>{shoes.name}</p>
            <p>Rating: {shoes.rating}</p>

            <p>Price : ${shoes.original_price}</p>
            <p>Category: {shoes.category_name}</p>
            <p>{shoes.categoryName}</p>



            <button className="add-to-cart" onClick={()=> {isInCart(shoes._id) ? navigate('/cart') :  addToCart(shoes,token, dispatch)}}> { isInCart(shoes._id)? "goToCart" : "addToCart"} </button>
            <button className="add-to-wishlist" onClick={() => {isInWishlist(shoes._id) ? navigate('/wishlist') : addToWishlist(shoes,token,dispatch)}}>{isInWishlist(shoes._id) ? "goToWishlist" : "addToWishlist"}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
