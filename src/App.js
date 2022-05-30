import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";


import HomePage from "./view/home";   
import ShopPage from "./view/shop";
import SingleProduct from "./view/singleproduct";
import CartPage from "./view/cart";
import CheckOut from "./view/checkout";
import HeaderSection from "./components/header";

import "./css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";


const App = ()=> {                   //functional component using istead of Class Component
  return(
    
      <BrowserRouter>
      <HeaderSection></HeaderSection>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="http.shop" element={<ShopPage/>}></Route>
        <Route path="http.single.product" element={<SingleProduct/>}></Route>
        <Route path="http.cart" element={<CartPage/>}></Route>
        <Route path="http.checkout" element={<CheckOut/>}></Route>
      </Routes>
      </BrowserRouter>
    
  )
}


export default App;
