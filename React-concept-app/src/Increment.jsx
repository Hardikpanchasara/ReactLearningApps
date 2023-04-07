import React, { useState } from "react";


const Increment = () => {

    const [Num, setNum] = useState(0)

    const Inc = () => {
        setNum(Num + 1)
    }
    const Dec = () => {
        if (Num > 0) {
            setNum(Num - 1)
        } else {
            alert("you only set positive value");
            setNum(0)
        }
    }

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-item-center">
                <div className="text-bg-dark p-3 rounded-4 my-3">
                    <h1 className="text-center mt-5">{Num}</h1>
                    <div className="p-4">
                        <button type="button" className="btn btn-outline-light" onClick={Inc}>increment</button>
                        <button type="button" className="btn btn-outline-light ms-2" onClick={Dec}>decrement</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Increment;