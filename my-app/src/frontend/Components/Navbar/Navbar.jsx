import "./Navbar.css";
import React, { useContext, useEffect, useState } from "react";
import { NavLink ,Link, useNavigate} from "react-router-dom";
import {BsCart2} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import { AuthContext } from "../../Context/AuthContext";
import { DataContext } from "../../Context/DataContext";

export const Navbar = () => {

  const{token} = useContext(AuthContext)
  const[searchText,setSearchText] = useState("")
  const{state:{filter},dispatch} =useContext(DataContext)
  const navigate =useNavigate()

  useEffect(()=> {
    dispatch({TYPE:"FILTER_CHANGE",payload:{FilterType:"searchvalue",value:searchText.trim()}})

    if(searchText.trim().length > 0) {
      navigate('/allproducts')
    }
  },[searchText])


  return (
    <div className="nav">
      <div className="first-nav">
        <Link to="/"><h1>Sneakers Club</h1></Link>
        
      </div>

        <div className="navigation-search">
          
        <input className="search-navbar" name="search-value"  value={filter.search}  type="text" placeholder="search items" 
        onChange={(e)=>setSearchText(e.target.value)}/>
        </div>
      

      <div className="second-nav">
        {/* <NavLink></NavLink> */}
        <NavLink to="/allproduct">Products</NavLink>
        
        <NavLink to="/cart"><BsCart2/></NavLink>
        <NavLink to="/wishlist"><AiOutlineHeart/> </NavLink>
        <NavLink to= {`${token ? "/userprofile" : "/login"}`}><AiOutlineUser/></NavLink>
        {/* <NavLink to="/signup">SignUp</NavLink> */}



        
       
      </div>
    </div>
  );
};
