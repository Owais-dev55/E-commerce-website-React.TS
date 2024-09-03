// import './App.css'
// import Men from './Components/Body/allproducts/MenProducts/Men'
// import { Body } from './Components/Body/Body'
// import Footer from './Components/Footer/Footer'
// import Head from './Components/Head/Head'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './Components/Head/Navbar'

// function App() {

//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Men />,
//     },

//   ])

//   return (
//     <>
//     <Navbar/>
//     <Head />
//     <Body/>

//     <Footer />

//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Head/Navbar";
import Men from "./Components/Body/allproducts/MenProducts/Men";
import Women from "./Components/Body/allproducts/WomenProducts/Women";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Footer/About";

import MainLayout from "./MainLayout";
import SignIn from "./Components/LoginForm/SignIn";
import SignUp from "./Components/LoginForm/SignUp";

function App() {
  return (
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
      </Routes>
    </Router>
  );
}

export default App;
