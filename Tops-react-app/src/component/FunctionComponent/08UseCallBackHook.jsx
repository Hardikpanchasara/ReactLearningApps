import React, { useCallback } from 'react'

const UseCallBackHook = () => {

  // const clickHandler = () => {
  //   console.log("called without hook")
  //   fetch('https://jsonplaceholder.typicode.com/users/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }

  // const cachedFn = useCallback(fn, dependencies)  syntaxt
  const clickHandler = useCallback(() => {
      console.log("called with callback hook")
      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => console.log(json))
    } , [ fetch ]) 
  const ButtonWrapper = (({CallbackfnHanlder}) => {
    console.log("clicked")
    return <button onClick={CallbackfnHanlder}>click</button>
    
  })
  return (
    <div className='container'>
      <h3>useCallback is a React Hook that lets you cache a function definition between re-renders.</h3>
      <h3>You should only rely on useCallback as a performance optimization.</h3>
      <p> The array of dependencies is not passed as arguments to the callback. Conceptually, though, that's what they represent: every value referenced inside the callback should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.</p>

      <ButtonWrapper CallbackfnHanlder={clickHandler} />
      <br /><br /><br />
    </div>
  )
}

export default UseCallBackHook