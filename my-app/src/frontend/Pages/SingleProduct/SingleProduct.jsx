import { useLocation, useNavigate } from "react-router-dom";
import { DataState } from "../../Context/DataContext"
import { useState } from "react";

 export const SingleProduct = ()=> {

    const {state : {cart,wishlist,products}, dispatch} = DataState()

    

    return(

        <div className="product-main-container">


        </div>
    )



 }