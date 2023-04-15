import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassCompoIntro from './01ClassCompoIntro'
import ClasscomponentMenu from './ClasscomponentMenu'
import Jsx from './02Jsx'
import Props from './03Props'
import State from './04-State'
import LifeCycle from './05-LifeCycle'
import ConditionalRendaring from './06ConditionalRendaring'
import ListKeys from './07ListKeys'
import Task from './Task'
import UncontrolledCompo from './09UncontrolledCompo'
import ControlledCompo from './08ControlledCompo' 
import CompositionVsInheritance from './10CompositionVsInheritance'
import StateLifting from './11StateLifting'
import Array from './12Array'
import ApiExample from './13ApiExample'
import CssExample from './14CssExample'
import Constructor from './01Constructor'
import StatelifecycleLoder from './05-StatelifecycleLoder'
import DynamicSubmenu from './15DynamicSubmenu'
import SpreadandRest from './16SpreadandRest'

export default class ClassRoutes extends Component {
  render() {
    return (
      <>
        <Routes >
          <Route path='/' element={<ClasscomponentMenu />} >
            <Route path='classcompointro' element={<ClassCompoIntro />} />
            <Route path='constructor' element={<Constructor />} />
            <Route path='jsx' element={<Jsx />} />
            <Route path='props' element={<Props />} />
            <Route path='state' element={<State />} />
            <Route path='lifecycle' element={<LifeCycle />} />
            <Route path='statelifecycleloader' element={<StatelifecycleLoder />} />
            <Route path='Conditionalrendaring' element={<ConditionalRendaring />} />
            <Route path='listkeys' element={<ListKeys />} />
            <Route path='controlledcompo' element={<ControlledCompo />} />
            <Route path='uncontrolledcompo' element={<UncontrolledCompo />} />
            <Route path='compositionvsinheritance' element={<CompositionVsInheritance />} />
            <Route path='statelifting' element={<StateLifting />} />
            <Route path='arrayaccess' element={<Array />} />
            <Route path='apiexample' element={<ApiExample />} />
            <Route path='cssexample' element={<CssExample />} />
            <Route path='dynamicsubmenu' element={<DynamicSubmenu />} />
            <Route path='spreadandrest' element={<SpreadandRest />} />
            <Route path='task' element={<Task />} />
          </Route>
        </Routes>
      </>
    )
  }
}

