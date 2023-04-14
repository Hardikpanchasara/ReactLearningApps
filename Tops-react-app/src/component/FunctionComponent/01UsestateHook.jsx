import React, { useState } from 'react'

const UsestateHook = () => {
  let data = "something"
  const [statedata, setStatedata] = useState("something")
  const [count ,setCount] = useState(0)
  let btnclick = () => {
    // console.log("called")
    data = "checking"
    // console.log(data)
    setStatedata(data)
  }
  return (
    <>
      <p>What is useState ?<br />
        The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.</p>
      <br /><br />

      simple variable data : {data}
      <br />
      statedata : {statedata}
      <br />
      <button onClick={btnclick}>click</button>
      <br />
      <button onClick={() => {(count <= 0 ) ? setCount(0) : setCount(count - 1)}}>decrement</button>
      {count }  
      <button onClick={() => {setCount(count + 1)}}>increment</button>
    </>
  )
}

export default UsestateHook