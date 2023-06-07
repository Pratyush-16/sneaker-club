import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Checkout/Checkout.css"

export const Checkout = () => {
  const navigate = useNavigate();

  const { state } = useContext(DataContext);
  const {
    state: { address, cart },
    dispatch,
  } = useContext(DataContext);
  const { tokens } = useContext(AuthContext);
  const [orderAddress, setOrderAddress] = useState(address[0]);

  const checkoutHandler = () => {
    navigate("/orders");
  };

  const priceHandler = state?.cart.reduce((acc, curr) => {
    return acc + curr.original_price * curr.qty;
  }, 0);

  return (
    <div className="order-summary-container">
        <h1 className="title">OrderSummary</h1>
      <div className="order-summary">
        
        <div className="order-address">
          {address.map((add, index) => (
            <div key={add._id} className="address-card">
              <label className="select-input">
                <input
                  type="radio"
                  checked={orderAddress === add}
                  onClick={() => setOrderAddress(add)}
                />
                <h3>{add.Name}</h3>
              </label>

              <p>{`${add.Address},${add.City},${add.State},${add.Country}`}</p>
              <p>{add.Pin_Code}</p>
              <p>{add.Phone_No}</p>
            </div>
          ))}

          <button
            className="btn-address"
            onClick={() => navigate("/userProfile")}
          >
            Add New Address
          </button>
        </div>

        <div className="main-order-detail-price-container">

        <div className="order-details-container">
          <h3>Order Details</h3>
          <div className="order-items">
            <h4>Items</h4>
            <h4>Qty</h4>
          </div>

          {state.cart.map((item) => (
            <p className="ordered-items" key={item._id}>
              <span>{item.brand}</span> <span>{item.qty}</span>
            </p>
          ))}
        </div>

        <div className="order-price-container">
          <h3>Price Details</h3>
          <p>price({cart.length})</p>
          <p>Total Amount : ${priceHandler}</p>
        </div>

        <button className="btn-confirm-order" onClick={() => checkoutHandler()}>
          Confirm Order
        </button>
      </div>
      </div>
    </div>
  );
};
