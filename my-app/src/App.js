import "./frontend/Pages/AllProduct/AllProduct.css"
import Categories from "./frontend/Components/Cards/Categories";
import { Footer } from "./frontend/Components/Footer/Footer";
import { Hero } from "./frontend/Components/Hero/Hero";
import { Navbar } from "./frontend/Components/Navbar/Navbar";
//import { PageRoutes } from "./frontend/Routes/PageRoutes";
import { Routes, Route } from "react-router-dom";
import {Home} from "./frontend/Pages/Home/Home"
// import { AllProduct } from "./frontend/Pages/AllProduct";
import { Cart } from "./frontend/Pages/Cart/Cart";
import { Wishlist } from "./frontend/Pages/Wishlist/Wishlist";
import { Login } from "./frontend/Pages/Auth/Log In/Login";
import { AllProduct } from "./frontend/Pages/AllProduct/AllProduct";
import { Signup } from "./frontend/Pages/Auth/Sign Up/Signup";
import  Mockman  from "mockman-js";
import { PrivateRoutes } from "./frontend/Routes/PrivateRoutes";
import Profile from "./frontend/Pages/ProfilePage/Profile";
import "./App.css"
import UserProfile from "./frontend/Pages/Auth/UserProfile";
import { SingleProduct } from "./frontend/Pages/SingleProduct/SingleProduct";


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
            <Route path="/"  element={<Home/>}/>
            
            <Route path ="/allproduct" element ={<AllProduct/>}/>
            <Route path ="/allproduct/:productId" element={<SingleProduct/>} />
            <Route path="/cart" element= {<PrivateRoutes><Cart/></PrivateRoutes>}/>
            <Route path = "/wishlist" element={<PrivateRoutes><Wishlist/></PrivateRoutes>}/>
            <Route path = "/mockman" element={<Mockman/>}/>
           
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path= "/userprofile" element= {<UserProfile/>}/>
            

        </Routes>
      
      
    </div>
  );
}

export default App;
