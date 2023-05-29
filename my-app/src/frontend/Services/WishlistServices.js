import axios from "axios";

export const addToWishlist = async(product,token, dispatch) => {
    try{
        const response = await axios.post(`/api/user/wishlist`,
        {
            product
        },
        {
            headers: {authorization: token}
        }
        );
        console.log(response)

        dispatch({TYPE:"ADD_TO_WISHLIST",payload:response.data.wishlist});

    }catch(error) {
        console.error(error);
    }

}

export const removeFromWishlist = async(productId,token,dispatch) =>{
    try{
        const response = await axios.delete(`/api/user/wishlist/${productId}`,
        {
            headers:{authorization: token}

            }
        )
        console.log(response)
        
        dispatch({TYPE: "REMOVE_FROM-WISHLIST", payload : response.data.wishlist})

    }catch(error) {
        console.error(error);
    }
}