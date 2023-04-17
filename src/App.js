import React from "react";
import Products from "./components/Products"
import Layout from "./components/Layout";
// import Header from "../components/Header";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
