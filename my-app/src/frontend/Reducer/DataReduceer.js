

export const initialState = {
    cart:[],
    wishlist:[],
    filters:{
        sort:"",
        rating:0,
        categorySelected:[],
        price:9000
    },
  }

 export const reducer =(state, action) => {
  switch(action.TYPE){

    case "FILTER_PRICE":
        return({...state, filter: {...state.filter,price: action.payload}})
        
    case "ADD_TO_CART" : 
    return ({...state, cart:[...action.payload]});


    case "REMOVE_FROM-CART" :
        return({...state, cart:[...action.payload]})

        case "UPDATE_QTY":
            return({...state,cart:[...action.payload]}) ;

    case "ADD_TO_WISHLIST" :
        console.log("Added wishlist")
        return({...state, wishlist:[...action.payload]})
        

    case "REMOVE_FROM-WISHLIST" :
        return({...state, wishlist:[...action.payload]})

    default :{
        console.log("default")
        return{...state}

    }
  }
  
 }