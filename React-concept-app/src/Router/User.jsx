import React from 'react'
import { useParams, useLocation , useNavigate } from 'react-router-dom'

const User = () => {
    const {fname , lname} = useParams();
    const Location = useLocation()
    const navigate = useNavigate()
    console.log(navigate)
  return (
    <div>
        <h1>user {fname} {lname} </h1>
        <p>my current location is {Location.pathname}</p>
        {Location.pathname === `/user/hardik/panchasara` ? 
        (<button onClick={() => navigate(-1)} >Go back</button>) : null }
    </div>
  )
}

export default User