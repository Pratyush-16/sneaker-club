import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartPrice } from "../Cart/CartPrice";

export const Checkout = () => {
  const navigate = useNavigate();

  const {state} = useContext(DataContext)
  const {
    state: { address, cart },
    dispatch,
  } = useContext(DataContext);
  const { tokens } = useContext(AuthContext);
  const [orderAddress, setOrderAddress] = useState(address[0]);
  //const Bill = TotalcartAmount(cart)
  console.log(cart)

  return (
    <div className="order-summary-container">
      <div className="order-summary">
        <h1 className="title">OrderSummary</h1>
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

        <div className="order-details">
          <div className="order-details-container">
            <h3>Order Details</h3>
            <div className="order-items">
              <h4>Items</h4>
              <h4>Qty</h4>
            </div>

          
            {state.cart.map((item) => (
              <p className="ordered-items" key={item._id}>
                {item.brand} {item.qty}
              </p>
            ))}
            
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};
