import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid} from "uuid";
import { DataContext } from "../../Context/DataContext";

export const NewAddress = () => {

    
  const navigate = useNavigate();
  const { state, dispatch } = useContext(DataContext);
  const [isUpdate,setUpdate]=useState(false);
  console.log(isUpdate)

 

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

  console.log(address);

  return (
    <div className="signup-container">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div className="signup-details">
        <h5>Add New Address</h5>

        {state.address.map((add) =><div style={{border:"1px solid black"}}>
            <p>{add.Name}</p>
        <button  onClick={()=> dispatch({TYPE:"REMOVE_ADDRESS",payLoad:add._id})}>Remove</button>
        <button onClick={()=> {setUpdate(true)  
            setAddress({...add})}}>Edit</button>
        </div>) }


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
                isUpdate?dispatch({TYPE:"UPDATE_ADDRESS", payLoad:address}):
              dispatch({ TYPE: "ADD_NEW_ADDRESS", payLoad: address })
              setUpdate(false)
                    setAddress({  _id:uuid(),
                        Name: "",
                        Address: "",
                        City: "",
                        State: "",
                        Country: "",
                        Pin_Code: "",
                        Phone_No: "",})
            }}>
            {isUpdate?"Update":"Save"}
          </button>

          {/* <button onClick={()=>dispatch({TYPE:"REMOVE_ADDRESS",payLoad:address._id})}>Remove</button> */}
        </div>
      </div>
    </div>
  );
};
