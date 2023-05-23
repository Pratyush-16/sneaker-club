import { createContext , useState} from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children})=>{

    const [cartItemsId , setCartItemsId] = useState([])

    const addToCart = async(products) => {
        try{
            if(cartItemsId.includes(product?.id)){
               alert("already exist") 
            }else{
                await fetch('/api/user/wishlist', {
                    method: 'POST',
                    headers: { authorization: encodedToken },
                    body: JSON.stringify({ product })
                });
            }

        }catch(error){
            console.error(error)
        }
    }

    return(

        <CartContext.Provider value= {{}}>{children}</CartContext.Provider>
       
    )
}