import React, { useContext } from 'react'
import { Appcontext } from './Context'

const User = () => {
    const {username , setUsername} = useContext(Appcontext)
  return (
    <>
    <h1> username  : {username}</h1>
    <input type="text" onChange={(e) => {setUsername(e.target.value)}} />
    </>
  )
}

export default User