

const filterBySearch =(products,filtersApplied) => 
filtersApplied.filterBySearch.length >0 ? products.filter((item) => item.name
.toLowerCase().includes( filtersApplied.filterBySearch.toLowerCase())) : products;


const filterByCategories =(products,filtersApplied) => 
filtersApplied.filterByCategory.length >0 ? products : products.filter((item) => item.category_name.toLowerCase());

const filterBySort =(products,filtersApplied) => 
filtersApplied.sort((a,b) =>
filtersApplied === "lowToHigh"
? a.discounted_price - b.discounted_price 
: b.discounted_price - a.discounted_price
      )
    : products;


// const filterByBrands =(products,filtersApplied) => {}