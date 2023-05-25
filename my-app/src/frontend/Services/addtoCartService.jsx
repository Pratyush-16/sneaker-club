import axios from 'axios'



export const  addToCartService = async(product, encodedToken) => {

    return axios.post("/api/user/cart" ,
    {product},
     {
        headers: { authorization: encodedToken },
      })
}
