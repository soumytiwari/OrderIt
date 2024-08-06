import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
     <nav className="navbar row stickey-top">
        {/* logo */}
        <div className="col-12 col-md-3">
          {/* anchor tag (creates whole new dom) take you to another page whereas link (creates the new component's dom /-, containing its state), takes you to another link */}
          <Link to="/">
            <img src="/images/logo.webp" alt="logo" className="logo" />
          </Link>
        </div>

        {/* Search Bar and Search Icon */}
        <div className="col-12 col-md-6 mt-2 mt-md-6">
          <Search/>
        </div>

        {/* Cart and Login button */}
        <div className="col-12 col-md-3 mt-4 mt-md-0">
          <Link to="/Cart">
            <span className="ml-3" id="cart">
              Cart
            </span>
            <span className="ml-1" id='cart_count'>
              0
            </span>
          </Link>
          {
            10 > 5 ? (
            <>
            <div className="ml-4 dropdown d-inline">
              <figure className="avatar avatar-nav">
                <img src="/images/images.png" alt="avatar" className="rounded-circle" />
              </figure>
              <span style={{color: 'white', fontWeight: 'bolder'}}>WSA Developer</span>
            </div>
            </>
            )
            : (
              <div className="btn ml-4" id="login_btn">
                Login
              </div>
            )
          }
        </div>
     </nav>
    </>
  )
}
