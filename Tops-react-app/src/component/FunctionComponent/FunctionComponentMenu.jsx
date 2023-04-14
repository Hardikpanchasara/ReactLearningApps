import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const FunctionComponentMenu = () => {
  return (
    <>
    <ul>
        <li><Link to="Functionintro">Function component Intro</Link></li>
        <li><Link to="usestate">UseState</Link></li>
        <li><Link to="useeffect">UseEffect</Link></li>
    </ul>
    <Outlet />
    </>
  )
}

export default FunctionComponentMenu