import React from 'react'

const FunctionIntro = () => {
    return (
        <div>
            <h4>what is function?</h4>
            <p>A React functional component is a simple JavaScript function that accepts props and returns a React element.</p>

            <h4>what is state?</h4>
            <p>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.</p>

            <h4>what is Hooks?</h4>
            <p>React Hooks are simple JavaScript functions that we can use to <span style={{ fontWeight: "bold" }}>isolate</span> the reusable part from a functional component.</p>
        </div>
    )
}

export default FunctionIntro