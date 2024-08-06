import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
// import PageNotFound from "./404Page"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* in the following div block, many container will come, so we can create here Routes */}
        <div className="container container-fluid">
          {/* Routes is the container of different Route ss */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/eats/stores/:id/menus" element={<Menu />}/>
            <Route path="/Cart" element={<Cart />}/>
            {/* <Route path="*" element={<PageNotFound />}/> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
