import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const Appcontext = createContext(null)

const Context = () => {
    const [username , setUsername]  = useState("")
  return (
    <>
    <Appcontext.Provider value={{username , setUsername }} >
    <Login/> <User/>
    </Appcontext.Provider>
    </>
  )
}

export default Context  