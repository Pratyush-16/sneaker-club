import React, { useContext } from "react";
import "./Filter.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";

export default function Filter() {

  const{dispatch} = useContext(DataContext)
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
        <input type="range" min={0} max={200} onChange={(event)=> dispatch({TYPE:"FILTER_PRICE", payload: event.target.value}) }/>
      </div>
      <hr/>
      <div className="filter-brand">
        <p>Brands</p>
        <label>
          <input type="checkbox"  />
          Nike
        </label>
        <label>
          <input type="checkbox" />
          Addidas
        </label>
        <label>
          <input type="checkbox" />
          Vans
        </label>
        <hr/>
        
      </div>
      <div className="filter-third">
        <p>Category</p>
        <label>
          <input type="checkbox" />
          Running
        </label>
        <label>
          <input type="checkbox" />
          Lifestyle
        </label>
        <label>
          <input type="checkbox" />
          Skateboarding
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
      <div className="filter-sortby">
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