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

export default class ClassRoutes extends Component {
  render() {
    return (
      <>
        <Routes >
          <Route path='/' element={<ClasscomponentMenu />} >
            <Route path='classcompointro' element={<ClassCompoIntro />} />
            <Route path='jsx' element={<Jsx />} />
            <Route path='props' element={<Props />} />
            <Route path='state' element={<State />} />
            <Route path='lifecycle' element={<LifeCycle />} />
            <Route path='Conditionalrendaring' element={<ConditionalRendaring />} />
            <Route path='listkeys' element={<ListKeys />} />
            <Route path='task' element={<Task />} />
          </Route>
        </Routes>
      </>
    )
  }
}

