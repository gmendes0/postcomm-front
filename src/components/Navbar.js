import React, { useState } from 'react'

export default function Navbar({ user }) {
  function logout(event) {
    event.preventDefault()
    sessionStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light white">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
          aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
        </button>

        <span className="navbar-brand">Postcomm</span>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <a href="" className="nav-link" onClick={logout}>Logout</a>
          </ul>
        </div>
      </nav>
    </>
  )
}
