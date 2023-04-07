import React, { createContext } from 'react'
import ComA from './ComA'

const fName = createContext();
const lName = createContext();

const Context = () => {
    return (
        <div className='text-center'>
            <fName.Provider value={"hardik"}>
                <lName.Provider value={"patel"}>

                    <ComA />

                </lName.Provider>
            </fName.Provider>
        </div>
    )
}

export default Context;
export { fName , lName } ;