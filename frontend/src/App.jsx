import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Login from './components/users/Login'
import Register from './components/users/Register'
import Cart from "./components/cart/Cart";
// import PageNotFound from "./404Page"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import store from './store'
import { loadUser } from "./actions/userAction";

export default function App() {

  // dispatched exactly once when the component is first rendered, and check if user is authenticated or not
  console.log(store)
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

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
            <Route path='/users/login' element={<Login />}/>
            <Route path="users/signup" element={<Register />}/>
            {/* <Route path="/Cart" element={<Cart />}/> */}
            {/* <Route path="*" element={<PageNotFound />}/> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
