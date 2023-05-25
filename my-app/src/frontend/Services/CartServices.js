import axios from "axios";

export const addToCart = async (product, token, dispatch) => {
  console.log("clicked" , product, token);
  try {
    const response = await axios.post(
      `/api/user/cart`,
      {
        product
      },
      {
        headers:{authorization: token}
      }
      
    );

    dispatch ({TYPE:"ADD_TO_CART", payload:response.data.cart})
      
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
