import React, { useCallback, useState } from 'react'


const funccount = new Set()
const UseCallBackHook = () => {

  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  //  const incrementcount = () => {
  //   setCount(count + 1)
  //  }
  //  const decrementcount = () => {
  //   setCount(count + 1)
  //  }
  //  const incrementnumber = () => {
  //   setNumber(number + 1)
  //  }


  const incrementcount = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrementcount = useCallback(() => {
    setCount(count - 1)
  }, [count])
  const incrementnumber = useCallback(() => {
    setNumber(number + 1)
  }, [number])

  funccount.add(incrementcount)
  funccount.add(decrementcount)
  funccount.add(incrementnumber)
  console.log(funccount.size)
  console.log(funccount)

  return (
    <div className='container'>
      <h3>useCallback is a React Hook that lets you cache a function definition between re-renders.</h3>
      <h3>You should only rely on useCallback as a performance optimization.</h3>
      <p> The array of dependencies is not passed as arguments to the callback. Conceptually, though, that's what they represent: every value referenced inside the callback should also appear in the dependencies array. In the future, a sufficiently advanced compiler could create this array automatically.</p>

      <div className="my-5">
        count : {count}
        number : {number}
        <button onClick={incrementcount}>incrementcount</button>
        <button onClick={decrementcount}>decrementcount</button>
        <button onClick={incrementnumber}>incrementnumber</button>
      </div>

      <br /><br /><br />
    </div>
  )
}

export default UseCallBackHook