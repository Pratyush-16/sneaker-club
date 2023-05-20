import React from "react";

export default function Filter() {
  return (
    <div className="main-filter">
      <div className="first-filter">
        <p>Filter</p>
        <a>Clear</a>
      </div>

      <div className="range-filter">
        <input type="range" />
      </div>

      <div className="filter-category">
        <p>Category</p>
      </div>

      <label>
        <input type="checkbox" /> Running
      </label>

      <label>
        <input type="checkbox" /> Lifestyle
      </label>

      <label>
        <input type="checkbox" /> Skateboarding
      </label>

      <div className="filter-rating">
        <label>
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
        </label>
      </div>

      <div className="filter-sort">
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
}
