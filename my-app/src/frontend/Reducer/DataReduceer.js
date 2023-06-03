

export const initialState = {
    cart:[],
    wishlist:[],
    filter:{
        search:"",
        sort:"null",
        rating:0,
        categorySelected:[],
        brand:[],
        price:200
    },
  }

 export const reducer =(state, action) => {
  switch(action.TYPE){

    case "FILTER_PRICE":
        console.log(action.payload)
        return({...state, filter: {...state.filter,price: action.payload}})
        

        case "sort": {
            return( { ...state, filter:{...state.filter,sort: action.value}  });
          }
          
          case "ratings" :
            return({...state,filter:{...state.filter,rating: action.value}})

            case "checkbox" : {
              const   isPresent = state.filter.categorySelected.find((category) => category === action.value)       
            
            if(isPresent) {
                return( { ...state,filter:{...state.filter,categorySelected:state.filter.categorySelected.filter((name) => name!==action.value)} } )
            }
            else{
                return({
                    ...state,filter:{...state.filter,categorySelected:[...state.filter.categorySelected,action.value]}
                })
            }

            }

            case "checkbox-brand" : {
                const   isPresent = state.filter.brand.find((category) => category === action.value)       
              
              if(isPresent) {
                  return( { ...state,filter:{...state.filter,brand:state.filter.brand.filter((name) => name!==action.value)} } )
              }
              else{
                  return({
                      ...state,filter:{...state.filter,brand:[...state.filter.brand,action.value]}
                  })
              }
  
              }

          
        
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