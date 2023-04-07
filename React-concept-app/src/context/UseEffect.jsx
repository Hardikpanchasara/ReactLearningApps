import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [num, setNum] = useState(0)
    const [nums, setNums] = useState(0)
    useEffect(() => {
        // alert("clicked")
        console.log("you added number")
        // document.title = `you clicked ${num} times`
    }, [num]);
    return (
        <div className='text-center'>
            <button
                onClick={() => {
                        setNum(num + 1)
                    }}
            >
                click me {num}
            </button>
            <button
                onClick={() => {
                        setNums(nums + 1)
                    }}
            >
                click me {nums}
            </button>
        </div>
    )
}

export default UseEffect;