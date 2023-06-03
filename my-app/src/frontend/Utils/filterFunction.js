export const filterItems =(state) => {

    let filteredItems =[];


    filteredItems = state.sneakers.filter(({rating}) => rating>= state.filter.rating) 
    //console.log(filteredItems)

    filteredItems = state.filter.categorySelected.length  ? filteredItems.filter(({category_name}) => state.filter.categorySelected.includes(category_name)) : filteredItems 

   // console.log(filteredItems,"checkcategory")


    // filteredItems = filteredItems.filter(({original_price}) => {
    //     return original_price < state.filter.price
    //     console.log(filteredItems,"price")

    
    // filteredItems = state.filter.sort!=[...filteredItems].sort((a,b) =>
    // state.filter.sort ==="High To Low" ? b.original_price - a.original_price : a.original_price-b.original_price) : filteredItems
    // })



    filteredItems= state.filter.search !==""?[...filteredItems].filter((item) => item.brand.includes(state.filter.search)||item.category_name.includes(state.filter.search)) :filteredItems

    console.log(filteredItems,"search")







    return filteredItems;
}
