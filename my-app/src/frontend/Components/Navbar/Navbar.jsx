import "./Navbar.css";
import React, { useContext } from "react";
import { NavLink ,Link} from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import  {faCartShopping} from "@fortawesome/free-regular-svg-icons"
//import{ShoppingCartRoundedIcon} from "@mui/icons-material/ShoppingCartRounded"
//import{FavoriteRoundedIcon} from "@mui/icons-material/FavoriteRounded"
import {ShoppingCartOutlinedIcon} from '@mui/icons-material/ShoppingCartOutlined';
import {BsCart2} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import { AuthContext } from "../../Context/AuthContext";

export const Navbar = () => {

  const{token} = useContext(AuthContext)

  return (
    <div className="nav">
      <div className="first-nav">
        <Link to="/"><h1>Sneakers Club</h1></Link>
        
      </div>

      
        <input className="search-navbar" type="text" placeholder="search items" 
         />
      

      <div className="second-nav">
        {/* <NavLink></NavLink> */}
        <NavLink to="/">Home</NavLink>
        
        <NavLink to="/cart"><BsCart2/></NavLink>
        <NavLink to="/wishlist"><AiOutlineHeart/> </NavLink>
        <NavLink to= {`${token ? "/userprofile" : "/login"}`}><AiOutlineUser/></NavLink>
        {/* <NavLink to="/signup">SignUp</NavLink> */}



        
       
      </div>
    </div>
  );
};
