import React, { useContext } from "react";
import Filter from "../../Components/Filters/Filter";
import { DataContext } from "../../Context/DataContext";
import { addToCart } from "../../Services/CartServices";
import { products } from "../../../backend/db/products";
import { AuthContext } from "../../Context/AuthContext";
import { addToWishlist } from "../../Services/WishlistServices";


export const AllProduct = () => {
  const { sneakers ,dispatch, setCart , cart, wishlist, setWishlist} = useContext(DataContext);
  const {token} = useContext(AuthContext)
  console.log(sneakers);

  return (
  
     
     <div className="filter-container">
     <Filter />
     
      
      <div className="productCard">
        {sneakers?.map((shoes) => (
          <div key={shoes.id} className="prod-card">
            <img src={shoes.image} alt="shoes" className="shoes-images" />
            <p>{shoes.brand}</p>
            <p>{shoes.name}</p>
            <p>Rating: {shoes.rating}</p>

            <p>Price : ${shoes.original_price}</p>

            <p>{shoes.categoryName}</p>
            <button className="add-to-cart" onClick={()=> addToCart(shoes,token, dispatch)}>Add to Cart</button>
            <button className="add-to-wishlist" onClick={() => addToWishlist(shoes,token,dispatch)} >Add to WishList</button>
          </div>
        ))}
      </div>
    </div>
  );
};
