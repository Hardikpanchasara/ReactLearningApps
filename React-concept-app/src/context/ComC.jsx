import React from 'react'
import { fName, lName } from './Context';

const ComC = () => {
    return (
        <div>
            <fName.Consumer>
                {(first) => {
                    return (
                        <lName.Consumer>
                        {(last) => {
                            return(
                            <h1>my name is {first} {last}</h1>
                            );
                        }}
                        </lName.Consumer>
                    );
                }}
            </fName.Consumer>
        </div>
    )
}

export default ComC;