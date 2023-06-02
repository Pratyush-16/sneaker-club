import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
  import { initialState, reducer } from "../Reducer/DataReduceer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sneakers, setSneakers] = useState(null);
  //const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([])

  // state   = {
  //   cart:[],
  //   wishlist:[],
  //   filters:{
  //       sort:"",
  //       rating:0,
  //       categorySelected:[],
  //       price:9000
  //   },
  // }
 
  const[state,dispatch] = useReducer(reducer,initialState)

  const getSneakers = async () => {
    try {
      const result = await axios.get("/api/products");
      //console.log(result.data.products);
      setSneakers(result.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSneakers();
  }, []);

  
  return (
    <DataContext.Provider value={{ state, dispatch, sneakers,  wishlist, setWishlist}}>{children}</DataContext.Provider>
  );
};
