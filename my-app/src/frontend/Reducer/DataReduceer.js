

export const initialState = {
    cart:[],
    wishlist:[]
  }

 export const reducer =(state, action) => {
  switch(action.TYPE){
    case "ADD_TO_CART" : 
    return ({...state, cart:[...action.payload]}),

    

    default :{
        return{...state}
    }
  }
  
 }