

export const isInCart =(productId,cart) =>{
    return cart.find(({_id})=> _id === productId)
}