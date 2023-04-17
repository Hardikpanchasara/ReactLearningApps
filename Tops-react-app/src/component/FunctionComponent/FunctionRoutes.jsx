import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import FunctionComponentMenu from './FunctionComponentMenu'
import UsestateHook from './01UsestateHook'
import FunctionIntro from './FunctionIntro'
import UseEffectHook from './02UseEffectHook'
import UseContextExample from './03UseContext'
import UseReducerhook from './04UseReducerhook'
import UseRefHook from './05UseRefHook'
import UseLayoutEffectHook from './06UseLayoutEffectHook'

const FunctionRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FunctionComponentMenu />} >
          <Route path="functionintro" element={<FunctionIntro />} />
          <Route path="usestate" element={<UsestateHook />} />
          <Route path="useeffect" element={<UseEffectHook />} />
          <Route path="usecontext" element={<UseContextExample />} />
          <Route path="usereducer" element={<UseReducerhook />} />
          <Route path="useref" element={<UseRefHook />} />
          <Route path="uselayouteffect" element={<UseLayoutEffectHook />} />
        </Route>
      </Routes>

    </>
  )
}


export default FunctionRoutes