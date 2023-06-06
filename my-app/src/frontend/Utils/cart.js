



export const isInCart =(productId,cart) =>{
    return cart.find(({_id})=> _id === productId)
}

export const billAmountHandle = (cart) =>
  cart.reduce((acc, curr) => acc + curr.qty * (curr.price), 0);
