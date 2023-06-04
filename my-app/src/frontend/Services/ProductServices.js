import axios from "axios"

 export const getProducts = async(productId) => {
    try{
        const response = await  axios.get(`/api/products/${productId}`);
        console.log(response, "response")
        return response.data.product;
    }catch(error){
        console.error(error)
    }
 }