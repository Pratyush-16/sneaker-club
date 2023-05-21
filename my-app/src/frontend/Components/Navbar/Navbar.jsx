import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import  {faCartShopping} from "@fortawesome/free-regular-svg-icons"
//import{ShoppingCartRoundedIcon} from "@mui/icons-material/ShoppingCartRounded"
//import{FavoriteRoundedIcon} from "@mui/icons-material/FavoriteRounded"
import {ShoppingCartOutlinedIcon} from '@mui/icons-material/ShoppingCartOutlined';
import {BsCart2} from "react-icons/bs"

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="first-nav">
        <h1>Sneakers Club</h1>
      </div>

      {/* <div className="nav-image">
        <img src="https://d3t3ll7elkac89.cloudfront.net/prod/user/72e070ab-f786-4c99-9be5-42553d3eb6e0/4e0f6ed1-9432-49ec-8483-62e3d47c1b56/images/image0_1024_1024_watermark.jpg?Expires=1684593904&Signature=Xq4isZgO-L5QmJC8QW9h4gzJXE4AiYCD8XuJTaHogdKkwF~TI4xcGHsyQF10rn7FjU55zMPlJ7qTCdGziLupuNA5tV8amJw8NEQbEKkk2K1A-lHfbPD0IEWlG5RD9RI98EUmH30m3HDr9H0BC3QHyPygmSBDVZl6sh3JukOuTCphihSl5x4SSd1sF7uzRYElcYNBtcqDydiIfxRDp5Ltl8FROFNdPGIC9yddFxv4E6VbPlq-MSuAQtqyr~Ai4xt~tmBwZ8liKZ~jsumYs-tDGdn4LRgRWqAm2jizbpZeX1SCtaWt2XoslVIzdWJfb8lkwxxNrCpxOvDRQnHPUwtcDw__&Key-Pair-Id=K3RDDB1TZ8BHT8"/>

      </div> */}

      
        <input className="search-navbar" type="text" placeholder="search items" />
      

      <div className="second-nav">
        <NavLink></NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart"><BsCart2/></NavLink>
        <NavLink to="/wishlist">wishlist </NavLink>
        <NavLink to="/login" >Log In</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
       
      </div>
    </div>
  );
};
