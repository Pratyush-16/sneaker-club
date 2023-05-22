import React, { useContext } from "react";
import Filter from "../../Components/Filters/Filter";
import { DataContext } from "../../Context/DataContext";

export const AllProduct = () => {
  const { sneakers , setCart , cart} = useContext(DataContext);
  console.log(sneakers);

  return (
    <div>
     
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
            <button className="add-to-cart" onClick={()=> setCart([...cart, shoes])}>Add to Cart</button>
            <button className="add-to-wishlist">Add to WishList</button>
          </div>
        ))}
      </div>
    </div>
  );
};
