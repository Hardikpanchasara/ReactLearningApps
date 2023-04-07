import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const Menu = () => {
  return (
    <div>
      <NavLink className="active_link" to="/">home</NavLink>
      <br/>
      <NavLink className="active_link" to="/about">about</NavLink>
      <br/>
      <NavLink className="active_link" to="/services">service</NavLink>
      <br/>
      <NavLink className="active_link" to="/search">search</NavLink>
      <br/>
      <NavLink className="active_link" to="/user/hardik/panchasara">user</NavLink>
    </div>
  )
}

export default Menu