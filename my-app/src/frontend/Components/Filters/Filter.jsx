import React from "react";
import "./Filter.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Filter() {
  return (

    <fieldset>
      <legend>
        Filters
      </legend>

      <div className="main-filter">
      

      <div className="range-filter">
      <p>Price Range: </p>
      <div>
        <span>$50</span>
      <input type="range" min="0" max="1000" value="" />
      <span>$200</span>
      </div>
       
      </div>

      <div className="filter-category">
        <p>Category: </p>
      
      <select className="categories" >
      <option value="Running">Running</option>
      <option value="Lifestyle">Lifestyle</option>
      <option value="SkateBoarding">SkateBoarding</option>
      </select>
      </div>

      {/* <label>
        <input type="checkbox" /> Running
      </label>

      <label>
        <input type="checkbox" /> Lifestyle
      </label>

      <label>
        <input type="checkbox" /> Skateboarding
      </label> */}

      <div className="filter-rating">
      <p>Rating :</p>
        <select className="ratings">
          
          <option value=""> 4.5 & above</option>
          <option value=""> 4.3 & above</option>
          <option value="">4.0 & above</option>
        </select>
        {/* <label>
          <input type="radio" />4
        </label>
        <label>
          <input type="radio" />3
        </label>
        <label>
          <input type="radio" />2
        </label>
        <label>
          <input type="radio" />1
        </label> */}
      </div>

      <div className="filter-sort">
        <p>Sort by</p>

        <select value="sort">
          <option value="">Low to High</option>
          <option value="">High to Low</option>
        </select>
        {/* <label>
          <input type="radio" />
          Price - Low to High
        </label>
        <label>
          <input type="radio" />
          Price - High to Low
        </label> */}
      </div>
    </div>
  

    </fieldset>
  )
}