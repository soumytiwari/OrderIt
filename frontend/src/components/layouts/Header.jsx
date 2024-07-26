import React from 'react'

export default function Header() {
  return (
    <>
     <nav className="navbar row stickey-top">
        {/* logo */}
        <div className="col-12 col-md-3">
            <img src="/images/logo.webp" alt="logo" className="logo" />
        </div>
     </nav>
    </>
  )
}
