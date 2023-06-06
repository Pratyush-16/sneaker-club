

export const initialState = {
    cart:[],
    wishlist:[],
    sneakers:[],
    filter:{
        search:"",
        sort:"null",
        rating:0,
        categorySelected:[],
        brand:[],
        price:200
    },
    address:[{
        _id:"1",
        Name:"Pratyush",
        Address:"51,White Street",
        City:"Bangalore",
        State:"Karnataka",
        Country:"India",
        Postal_Code:"560056",
        Mob_No:"123456789", 
    }],
  }



 export const reducer =(state, action) => {
  switch(action.TYPE){

    case "INITIALIZE-SNEAKERS":
        return {...state, sneakers: action.payload}

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

              case "clear-filter" : {
                return {...state, filter:{search:"",
                sort:"null",
                rating:0,
                categorySelected:[],
                brand:[],
                price:200}}
              }


            case "FILTER_CHANGE":{
                //console.log(action.payLoaded,"hero)"
                if(action.payLoad.FilterType === "categorySelected"){
                    const isSelectedAlready= state.filter.categorySelected.includes(action.payLoad.value);
                    if(!isSelectedAlready) 
                        return {...state, filter:{...state.filter,[action.payLoad.FilterType]:[...state.filter.categorySelected,action.payLoad.value]}
                    }
                    else return {...state, filter:{...state.filter,[action.payLoad.FilterType]:[...state.filter.categorySelected.filter((cat)=>cat!==action.payLoad.value),action.payLoad.value]}}
                    
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


        case "ADD_NEW_ADDRESS":
            return {...state,address:[...state.address,action.payLoad]}

            case "REMOVE_ADDRESS":
                console.log(action.payload)
                return {...state, address:state.address.filter(({_id})=> _id!==action.payLoad) }  

            case "UPDATE_ADDRESS":
                return {...state,address:state.address.map((add)=>add._id===action.payLoad._id?action.payLoad:add)};


    default :{
        console.log("default")
        return{...state}

    }
  }
  
 }