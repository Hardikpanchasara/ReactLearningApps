import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import FunctionComponentMenu from './FunctionComponentMenu'
import UsestateHook from './01UsestateHook'
import FunctionIntro from './FunctionIntro'
import UseEffectHook from './02UseEffectHook'
import UseReducerhook from './04UseReducerhook'
import UseRefHook from './05UseRefHook'
import UseLayoutEffectHook from './06UseLayoutEffectHook'
import UseMemoHook from './07UseMemoHook'
import UseCallBackHook from './08UseCallBackHook'
import UseContextHook from './03UseContextHook'
import StyledComponent from './StyledComponent'
import Context from './Usecontext/Context'
import ParentCompo from './honeycomb/ParentCompo'

const FunctionRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FunctionComponentMenu />} >
          <Route path="functionintro" element={<FunctionIntro />} />
          <Route path="usestate" element={<UsestateHook />} />
          <Route path="useeffect" element={<UseEffectHook />} />
          <Route path="usecontext" element={<UseContextHook />} />
          <Route path="usecontextexample" element={<Context />} />
          <Route path="usereducer" element={<UseReducerhook />} />
          <Route path="useref" element={<UseRefHook />} />
          <Route path="uselayouteffect" element={<UseLayoutEffectHook />} />
          <Route path="usememo" element={<UseMemoHook />} />
          <Route path="usecallback" element={<UseCallBackHook />} />
          <Route path="styledcomponent" element={<StyledComponent />} />
          <Route path="useimperetive" element={<ParentCompo />} />
        </Route>
      </Routes>

    </>
  )
}


export default FunctionRoutes