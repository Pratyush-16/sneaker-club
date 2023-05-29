import axios from "axios";

export const addToCart = async (product, token, dispatch) => {
  console.log("clicked", product, token);
  try {
    const response = await axios.post(
      `/api/user/cart`,
      {
        product,
      },
      {
        headers: { authorization: token },
      }
    );

    dispatch({ TYPE: "ADD_TO_CART", payload: response.data.cart });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const removeFromCart = async (productId, token, dispatch) => {
  console.log("Removed",productId)
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`,
    
    {
      headers:{authorization: token}
    });
    console.log(response)

    dispatch({TYPE:"REMOVE_FROM-CART", payload: response.data.cart})

  } catch (error) {
    console.error(error);
  }
};
