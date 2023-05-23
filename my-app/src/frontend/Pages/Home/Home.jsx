import React from "react";
import "../Home/Home.css";
import { homecategories } from "../../../backend/db/categories";
import { Footer } from "../../Components/Footer/Footer";
import { NavLink } from "react-router-dom";
import { Hero } from "../../Components/Hero/Hero";

export const Home = () => {
  return (
    <div className="sneakers-home">
      
      <Hero/>
      
      <div className="container">
        {/* <h3 className="container-center">Categories</h3> */}
        {homecategories.map((item) => (
          <div className="category-card">
           
            <img src={item.img} alt="shoes" className="cardImage" />
            <p>{item.category}</p>
          </div>
        ))}
      </div>

      <div className="home-Footer">
        <Footer />
      </div>
    </div>
  );
};
