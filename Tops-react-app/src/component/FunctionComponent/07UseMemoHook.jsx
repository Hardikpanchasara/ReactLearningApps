import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [num, setNum] = useState(0)
    const [show, setShow] = useState(false)

    const getValue = () => {
        return setNum(num + 1)
    }
    const countNumber = (val) => {
        console.log("num " , val)
        for (let i=0 ; i<= 1000000000 ; i++){}
        return val ;
    }
    // const CheckData = () => {
    //     return countNumber(num)
    // }
    const CheckData = useMemo(() => {
        return countNumber(num)
    } , [num])
    // const cachedValue = useMemo(calculateValue, dependencies)  syntaxt structure

    return (
        <>
            <div className="container">
                <h3>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</h3>
                <button onClick={getValue}>counter</button>
                {/* <p>my new number : {<CheckData />}</p> */}
                <p>my new number : {CheckData}</p>
                <button onClick={() => setShow(!show)}>{show ? "clicked" : "click"}</button>
            </div>
        </>
    )
}

export default UseMemoHook