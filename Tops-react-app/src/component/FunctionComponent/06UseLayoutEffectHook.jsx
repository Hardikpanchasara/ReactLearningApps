import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutEffectHook = () => {
    const [num ,setNum] = useState(0)
    // useEffect(() => {
    //     if(num === 0){
    //         setNum(Math.random() * 100)
    //     } 
    // },[num])   // in this number update after screen painted
    useLayoutEffect(() => {
        if(num === 0){
            setNum(Math.random() * 100)
        }
    },[num])   // in this number upadate before screen painted



    // useEffect(() => {
    //     console.log("first effect");
    // })
    // useLayoutEffect(() => {
    //     console.log("second effect");
    // })
    // // useEffect(() => {
    // //     console.log("second effect");
    // // })
    // useEffect(() => {
    //     console.log("third effect");
    // })
  return (
    <>
    <div className="container">
        <h3>UseLayoutEffect runs synchronously after a render and before the screen painted (updated),. useLayoutEffect blocks the browser from repainting. </h3>
        <h3>UseEffect runs asynchronously and after a render is painted on browser, useEffect does not block the browser.</h3>
        <br /><br />
        <p>random number : {num}</p>
        <button onClick={() => setNum(0)}>update number</button>
    </div>
    </>
  )
}

export default UseLayoutEffectHook