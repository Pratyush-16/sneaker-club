import "./Hero.css"
import { NavLink } from "react-router-dom"

export const Hero =()=>{

    return(
        <div className="hero">
        <img
          src="https://u-static.fotor.com/images/text-to-image/result/PRO-2a43d2174c89417989528b3c07633895.jpg"
          alt=""
          className="hero-image"
        />

        <button className="shop-sneaker-btn">
          <NavLink to="/allproduct">Shop Now</NavLink>{" "}
        </button>
      </div>
    )
}