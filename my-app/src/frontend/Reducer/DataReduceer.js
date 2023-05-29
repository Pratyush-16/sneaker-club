

export const initialState = {
    cart:[],
    wishlist:[]
  }

 export const reducer =(state, action) => {
  switch(action.TYPE){
    case "ADD_TO_CART" : 
    return ({...state, cart:[...action.payload]});

    case "REMOVE_FROM-CART" :
        return({...state, cart:[...action.payload]})

    case "ADD_TO_WISHLIST" :
        return({...state, wishlist:[...action.payload]})

    case "REMOVE_FROM-WISHLIST" :
        return({...state, wishlist:[...action.payload]})

    default :{
        return{...state}
    }
  }
  
 }