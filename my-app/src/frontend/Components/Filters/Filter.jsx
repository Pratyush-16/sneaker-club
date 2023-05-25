import React from "react";
import "./Filter.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Filter() {
  return (

    // <fieldset>
    //   <legend>
    //     Filters
    //   </legend>

      <div className="filterDiv">
      <div className="filter-first">
        <p>Filters</p>
        <a>Clear</a>
      </div>
      <hr/>
      <div className="filter-second">
        <input type="range" />
      </div>
      <hr/>
      <div className="filter-third">
        <p>Category</p>
        <label>
          <input type="checkbox" />
          Indoor Plants
        </label>
        <label>
          <input type="checkbox" />
          Fruit PLants
        </label>
        <label>
          <input type="checkbox" />
          Pots and Planter
        </label>
        <label>
          <input type="checkbox" />
          Tool Kit
        </label>
        <label>
          <input type="checkbox" />
          Flower Plant
        </label>
      </div>
      <hr/>
      <div className="filter-fourth">
        <p>Rating</p>
        <label>
          <input type="radio" />4 star and above
        </label>
        <label>
          <input type="radio" />3 star and above
        </label>
        <label>
          <input type="radio" />2 star and above
        </label>
        <label>
          <input type="radio" />1 star and above
        </label>
      </div>
      <hr/>
      <div className="filter-fifth">
        <p>Sort by</p>
        <label>
          <input type="radio" />
          Price - Low to High
        </label>
        <label>
          <input type="radio" />
          Price - High to Low
        </label>
      </div>
    </div>
  );


    // </fieldset>
  
}