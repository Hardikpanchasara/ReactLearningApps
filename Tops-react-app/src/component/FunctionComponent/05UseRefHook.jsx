import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [userinp , setUserinp] = useState("")
    // const [count , setCount] = useState() 
    const count = useRef(0)
    // console.log(count)
    const inputRef = useRef()
  
    useEffect(() => {
      // setCount(count + 1) 
      count.current = count.current + 1
    } )

    const ActiveInp = () => {
       inputRef.current.focus()
       inputRef.current.style.backgroundColor = "lightgreen"
       inputRef.current.style.color = "red"
    }
  return (
    <>
    <div className="container">
    <h3>its create a mutable variable which will not re-render component</h3>
    <h3>Used to access the DOM directly</h3>
    <input 
    type="text" 
    value={userinp}
    onChange={(e) => setUserinp(e.target.value)} />

    <p>the number of times component render : {count.current}</p>

    <h3>DOM Access</h3>
    <input type="text" ref={inputRef} />
    <br />
    <button onClick={ActiveInp}>active input</button>

    </div>

    </>
  )
}

export default UseRefHook