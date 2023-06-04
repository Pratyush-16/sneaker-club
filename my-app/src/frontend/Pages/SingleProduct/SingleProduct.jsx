import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DataState } from "../../Context/DataContext";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../Services/ProductServices";
import { AuthContext } from "../../Context/AuthContext";
import { addToCart } from "../../Services/CartServices";
import { isInCart } from "../../Utils/cart";
import { isInWishlist } from "../../Utils/wishlist";
import { addToWishlist } from "../../Services/WishlistServices";


export const SingleProduct = () => {
  const { productId } = useParams();
  const{token} = useContext(AuthContext)
  console.log(productId);
  const {
    state: { cart, wishlist, products },
    dispatch,
  } = DataState();
  const [product, setProduct] = useState();

  const navigate = useNavigate()


  const cartHandler =(product, token, dispatch) =>{
    isInCart(product._id,cart)?navigate('/cart'): addToCart(product, token, dispatch)
  }


  const wishlistHandler =(product, token, dispatch) =>{
    isInWishlist(product._id, wishlist)?navigate('/wishlist'): addToWishlist(product, token, dispatch)
  }

  const getData = async (productId) => {
    console.log("function call");
    try {
      const product = await getProducts(productId);
      setProduct(product);
      console.log(product, "check");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData(productId);
  }, []);

  return <div className="product-main-container">
    <div className="product-image">
    <img src={product?.image}
    alt="productimage"/>
    </div>
     
     <div className="product-details">
        <h3>{product?.brand}</h3>
        <p>{product?.rating}</p>
        <p>${product?.original_price}</p>
        <p>{product?.description}</p>
     </div>

     <div>
        <button onClick={()=> cartHandler(product,token,dispatch)}>{isInCart(product,cart)?"Go TO Cart" :"Add To Cart"}</button>

        <button onClick={()=> wishlistHandler(product,token,dispatch)}>{isInWishlist(product,cart)?"Go To Wishlist" :"Add To Wishlist"}</button>
     </div>
    


  </div>;
};
