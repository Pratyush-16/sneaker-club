import { Cart } from "../Pages/Cart/Cart"


export const isInCart =(productId,cart) =>{
    return cart.find(({_id})=> _id === productId)
}


// export const TotalcartAmount = (cart) => {
//     return cart.reduce((acc,{original_price,discounted_price,qty}))
// }