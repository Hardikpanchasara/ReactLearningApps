import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useReducer, useState } from 'react'

// const initialvalue = 0 ;
function init() {
    console.log("init function")
    return { count : 0 , another : "Default"}
}
const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state ,
                count : state.count + 1 ,
                another : "increment"
            }
        case "DEC":
            return { 
                ...state ,
                count : state.count - 1,
                another : "decrement"
            }
        default:
            return state ;
    }
}
const UseReducerhook = ({initialvalue}) => {
    // const [count , setCount] = useState(0)
    const [state , dispatch] = useReducer (reducer , initialvalue , init)
  return (
    <>
    <div className="container">
    <MDBBtn className='my-2' color="secondary" onClick={() => dispatch({type : "DEC"})} > Decrement </MDBBtn>
    {state.count} &nbsp; 
    {state.another}
    <MDBBtn className='my-2' color="secondary" onClick={() => dispatch({type : "INC"})} > increment </MDBBtn>
    </div>

    </>

  )
}

export default UseReducerhook