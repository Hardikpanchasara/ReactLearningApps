import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterA from './RouterA'

const Routerapp = () => {
  return (
    <>
        <BrowserRouter>
            <RouterA/>
        </BrowserRouter>
    </>
  )
}

export default Routerapp