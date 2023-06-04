import React, { useContext } from "react";
import "./Filter.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";

export default function Filter() {

  const{dispatch} = useContext(DataContext)
  const{state} = useContext(DataContext)



  //console.log(state.filter)
  
  console.log(state);
  return (

    // <fieldset>
    //   <legend>
    //     Filters
    //   </legend>

      <div className="filterDiv">
      <div className="filter-first">
        <p>Filters</p>
        <a onClick={()=> dispatch ({TYPE:"clear-filter"})}>Clear</a>
      </div>
      <hr/>
      <div className="filter-second">
        <input type="range" min={0} 
        max={200} 
        value={state.filter.price}
        onChange={(event)=> dispatch({TYPE:"FILTER_PRICE", payload: event.target.value}) }/>
      </div>
      <hr/>
      <div className="filter-brand">
        <p>Brands</p>
        <label>
          <input type="checkbox" 
          onClick={()=> dispatch({TYPE:"checkbox-brand" , value:"Nike"})} />
          Nike
        </label>
        <label>
          <input type="checkbox" 
          onClick={()=> dispatch({TYPE:"checkbox-brand" , value:"Addidas"})}/>
          Addidas
        </label>
        <label>
          <input type="checkbox"
          onClick={()=> dispatch({TYPE:"checkbox-brand" , value:"Vans"})}
           />
          Vans
        </label>
        <hr/>
        
      </div>
      <div className="filter-third">
        <p>Category</p>
        <label>
          <input type="checkbox"
          onClick={()=> dispatch({TYPE:"checkbox", value:"Running"}) }/>
          Running
        </label>
        <label>
          <input type="checkbox"
          onClick={()=> dispatch({TYPE:"checkbox", value:"Lifestyle"}) } />
          Lifestyle
        </label>
        <label>
          <input type="checkbox" 
          onClick={()=> dispatch({TYPE:"checkbox", value:"Skateboarding"}) }/>
          Skateboarding
        </label>
        
      </div>
      <hr/>
      <div className="filter-fourth">
        <p>Rating</p>
        <label>
          <input type="radio" 
          value="4 stars"
          name="rating"
          onClick={(e) => dispatch({TYPE: "ratings", value: 4})}
          />4 star and above
        </label>
        <label>
          <input type="radio" 
          value="3 stars"
          name="rating"
          onClick={(e) => dispatch({TYPE: "ratings", value: 3})}
          />3 star and above
        </label>
        <label>
          <input type="radio"
          value="2 stars"
          name="rating" 
          onClick={(e) => dispatch({TYPE: "ratings", value: 2})}/>2 star and above
        </label>
        <label>
          <input type="radio" 
          value="1 stars"
          name="rating"
          onClick={(e) => dispatch({TYPE: "ratings", value: 1})}/>1 star and above
        </label>
      </div>
      <hr/>
      <div className="filter-sortby">
        <p>Sort by</p>
        <label>
          <input type="radio" 
          name="low-high"
          value="Low to High"
          onClick={(e) => dispatch({TYPE: "sort", value: "Low_To_High"})}/>
          Price - Low to High
        </label>
        <label>
          <input type="radio"
           name="low-high"
           value="high to low"
           onClick={(e) => dispatch({TYPE: "sort",value:"High to Low"})} />
          Price - High to Low
        </label>
        
      </div>
    </div>
  );



    // </fieldset>
  
}