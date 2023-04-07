import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <h1>Error 404</h1>
      <h1>!oops page note found</h1>
      <NavLink to="/">Go back</NavLink>
    </>
  )
}

export default Error;