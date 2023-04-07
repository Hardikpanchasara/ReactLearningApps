import React from "react";

const Slotm = (params) => {
    let { x, y, z } = params;
    // let x = params.x;
    // let y = params.y;
    // let z = params.z;
    // return  ((x === y) && (y === z)) ? <SlotTrue /> : <SlotFalse /> ;

    if ((x === y) && (y === z)){
        return (
            <>
                <h1>
                    {x} {y} {z}
                </h1>
                <h2>this is maching</h2>
            </>
        )
    }
    else{
        return (
            <>
                <h1>
                    {x} {y} {z}
                </h1>
                <h2>this is not maching</h2>
            </>
        )
    }
}
export default Slotm;