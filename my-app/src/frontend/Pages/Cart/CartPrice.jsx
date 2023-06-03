import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

export const CartPrice =(products)=> {
    const {state} = useContext(DataContext)

    const priceHandler = state?.cart.reduce((acc,curr)=> curr.original_price * curr.qty +acc,0)

    return (
        <div className="cart-container-second">
          <h2>PRICE DETAILS</h2>
          <hr />
          <div className="cart-container-second-first">
            <p>Price</p>
            <p className="priceStyle">{priceHandler}</p>
          </div>
          {/* <div className="cart-container-second-first">
            <p>Discount</p>
            <p className="priceStyle">{discountHandler}</p>
          </div>
          <div className="cart-container-second-first">
            <p>Delivery Charges</p>
            <p className="priceStyle">{deliveryPrice}</p>
          </div>
          <hr />
          <div className="cart-container-second-first">
            <p>Total Amount</p>
            <p className="priceStyle">{totalAmount}</p>
          </div> */}
          <hr />
          <div className="save-line">
            {priceHandler >= 1000 ? (
              <p>You will save Rs. 200 on this order</p>
            ) : (
              <p>Please make cart value above Rs. 1000 To Avail the discount</p>
            )}
          </div>
          <button className="placeOrderButton">Place Order</button>
        </div>
      );
}