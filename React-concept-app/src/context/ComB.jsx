import React, { useContext } from 'react'
// import ComC from './ComC'
import { fName ,lName } from './Context'

const ComB = () => {
   
  const fname = useContext(fName);
  const lname = useContext(lName);
  return (
    <div>
        <h1>my name is {fname} {lname}</h1>
    </div>
  )
}

export default ComB