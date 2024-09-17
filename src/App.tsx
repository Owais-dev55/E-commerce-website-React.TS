import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Head/Navbar";
import Men from "./Components/Body/allproducts/MenProducts/Men";
import Women from "./Components/Body/allproducts/WomenProducts/Women";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Footer/About";
import MainLayout from "./MainLayout";
import SignIn from "./Components/LoginForm/SignIn";
import SignUp from "./Components/LoginForm/SignUp";
import Checkout from "./Components/Cart/Checkout";
import { useState } from "react";
import { cart } from "./utilities/Context";
import Cart from "./Components/Cart/Cart";
import { Products } from "./utilities/Types";

function App() {
  const [count, setCount] = useState(0);
const [cartItems , setCartItems] = useState<Products[]>([])


  return (
    <cart.Provider value={{ count , setCount , cartItems , setCartItems }}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Footer />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
    </Router>
    </cart.Provider>
  );
}



export default App;
