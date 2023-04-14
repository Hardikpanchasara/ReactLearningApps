import React, { Children } from 'react'
import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import FunctionComponentMenu from './FunctionComponentMenu'
import UsestateHook from './01UsestateHook'
import FunctionIntro from './FunctionIntro'
import UseEffectHook from './02UseEffectHook'

const FunctionRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FunctionComponentMenu />} >
          <Route path="functionintro" element={<FunctionIntro />} />
          <Route path="usestate" element={<UsestateHook />} />
          <Route path="useeffect" element={<UseEffectHook />} />
        </Route>
      </Routes>

    </>
  )
}


export default FunctionRoutes