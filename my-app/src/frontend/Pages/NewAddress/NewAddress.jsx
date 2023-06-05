import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid} from "uuid";
import { DataContext } from "../../Context/DataContext";

export const NewAddress = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(DataContext);

  const [address, setAddress] = useState({
       _id:uuid(),
    Name: "",
    Address: "",
    City: "",
    State: "",
    Country: "",
    Pin_Code: "",
    Phone_No: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  //console.log(address);

  return (
    <div className="signup-container">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div className="signup-details">
        <h5>Add New Address</h5>
        <input
          name="Name"
          value={address.Name}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => formHandler(e)}
        />
        <input
          name="Address"
          value={address.Address}
          type="text"
          placeholder="Enter Flat No,Buuilding"
          onChange={(e) => formHandler(e)}
        />
        <input
          name="City"
          value={address.City}
          type="text"
          placeholder="Enter City"
          onChange={(e) => formHandler(e)}
        />
        <input
          name="State"
          value={address.State}
          type="text"
          placeholder="Enter State"
          onChange={(e) => formHandler(e)}
        />
        <input
          name="Country"
          value={address.Country}
          type="text"
          placeholder="Enter Country"
          onChange={(e) => formHandler(e)}
        />
        <input
          name="Pin_Code"
          value={address.Pin_Code}
          type="number"
          placeholder="Enter Pin Code"
          onChange={(e) => formHandler(e)}
        />
        <input
          name="Phone_No"
          value={address.Phone_No}
          type="number"
          placeholder="Enter Phone No"
          onChange={(e) => formHandler(e)}
        />

        <div>
          <button
            className="btn-save"
            onClick={() => {
              dispatch({ type: "ADD_NEW_ADDRESS", payLoad: address });
              setAddress({
                ...address,
                _id:uuid(),
                Name: "",
                Address: "",
                City: "",
                State: "",
                Country: "",
                Postal_Code: "",
                Mob_No: "",
              });
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
