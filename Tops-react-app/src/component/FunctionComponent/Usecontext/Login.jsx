import React, { useContext } from 'react'
import { Appcontext } from './Context'

const Login = () => {
    const {username , setUsername} = useContext(Appcontext)
  return (
    <>
    <h1>login component : {username}</h1>
    <input type="text" onChange={(e) => {setUsername(e.target.value)}} />
    </>
  )
}

export default Login