import React from 'react'
import { Route, Routes , Navigate } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Error from './Error'
import Menu from './Menu'
import Services from './Services'
import User from './User'
import Serch from './Serch'

const RouterA = () => {
    const Name = () => {
        return (
            <h1>this is name page</h1>
        )
    }
    return (
        <>
        <Menu />
            <Routes>
                <Route exact path='/' element={ <Home name='Home' />} />
                <Route exact path='/about' element={ <About name='About' />} />
                <Route exact path='/services' element={ <Services name='services' /> } />
                <Route exact path='/search' element={ <Serch /> } />
                <Route exact path='/user/:fname/:lname' element={ <User /> } />
                <Route exact path='/about/name' element={Name} />
                {/* <Route path='*' element={<Navigate to="/" />} /> */}
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

export default RouterA