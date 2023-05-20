import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [sneakers, setSneakers] = useState(null);

  const getSneakers = async () => {
    try {
      const result = await axios.get("/api/products");
      console.log(result.data.products, "hello");
      setSneakers(result.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSneakers();
  }, []);

  return (
    <DataContext.Provider value={{ sneakers }}>{children}</DataContext.Provider>
  );
};
