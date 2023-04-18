
import React, { createContext, useContext, useState } from 'react'
import './theme.css';

const ThemeContext = createContext("light")


const UseContextHook = () => {
    const [theme, setTheme] = useState("dark")
    return (
        <div className='container'>
            <ThemeContext.Provider value={theme}>
                <Form />
                <br />
                <Button onclick={() => {
                    setTheme(theme === "dark" ? "light" : "dark")
                }} > {theme === "dark" ? "Dark mode" : "light mode"} </Button>
                <br />
                <br />
            </ThemeContext.Provider>

        </div>
    )
}

const Form = ({ children }) => {
    return (
        <Panel title="welcome">
            <button>Sign up</button>
            <button>Login</button>
        </Panel>

    )
}

const Panel = ({ title, children }) => {
    const theme = useContext(ThemeContext)
    const className = "panel-" + theme
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

const Button = ({ children, onclick }) => {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme
    return (
        <button onClick={onclick} className={className}>
            {children}
        </button>
    )
}


export default UseContextHook