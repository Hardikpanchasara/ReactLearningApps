import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FunctionComponentMenu from './FunctionComponentMenu'
import Clock from './Clock'

const FunctionRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FunctionComponentMenu />} >
          <Route path="clock" element={<Clock />} />
        </Route>
      </Routes>
    </>
  )
}

export default FunctionRoutes