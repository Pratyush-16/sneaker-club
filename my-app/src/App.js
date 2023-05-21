import "./frontend/Pages/AllProduct/AllProduct.css"
import Categories from "./frontend/Components/Cards/Categories";
import { Footer } from "./frontend/Components/Footer/Footer";
import { Hero } from "./frontend/Components/Hero/Hero";
import { Navbar } from "./frontend/Components/Navbar/Navbar";
//import { PageRoutes } from "./frontend/Routes/PageRoutes";
import { Routes, Route } from "react-router-dom";
import {Home} from "./frontend/Pages/Home/Home"
// import { AllProduct } from "./frontend/Pages/AllProduct";
import { Cart } from "./frontend/Pages/Cart";
import { Wishlist } from "./frontend/Pages/Wishlist";
import { Login } from "./frontend/Pages/Auth/Login";
import { AllProduct } from "./frontend/Pages/AllProduct/AllProduct";
import { Signup } from "./frontend/Pages/Auth/Signup";
import  Mockman  from "mockman-js";


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
            <Route index  element={<Home/>}/>
            
            <Route path ="/allproduct" element ={<AllProduct/>}/>
            <Route path="/cart" element= {<Cart/>}/>
            <Route path = "/wishlist" element={<Wishlist/>}/>
            <Route path = "/mockman" element={<Mockman/>}/>
           
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      {/* <Hero/>
      <Categories/> */}
     {/* <Footer/> */}
      
      
    </div>
  );
}

export default App;
