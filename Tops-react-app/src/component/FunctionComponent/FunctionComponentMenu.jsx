import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const FunctionComponentMenu = () => {
  return (
    <>
    <ul>
        <li><Link to="clock">clock</Link></li>
    </ul>
    <Outlet />
    </>
  )
}

export default FunctionComponentMenu