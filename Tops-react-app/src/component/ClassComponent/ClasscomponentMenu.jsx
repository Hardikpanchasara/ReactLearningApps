import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit';


export default class ClasscomponentMenu extends Component {
  
  render() {
    return (
      <>
        <div>
          <ul >
            <li className="d-block" >
            <Link to="classcompointro"><MDBBtn className='my-2' color="secondary" > Class Component Intro </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="constructor"><MDBBtn className='my-2' color="secondary" > Constructor </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="jsx"><MDBBtn className='my-2' color="secondary" > JSX </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="props"><MDBBtn className='my-2' color="secondary" > Props </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="state"><MDBBtn className='my-2' color="secondary" > State </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="lifecycle"><MDBBtn className='my-2' color="secondary" > Life-cycle </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="statelifecycleloader"><MDBBtn className='my-2' color="secondary" > Statelifecycle Loader </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="conditionalrendaring"><MDBBtn className='my-2' color="secondary" > Conditional Rendaring </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="listkeys"><MDBBtn className='my-2' color="secondary" > ListKeys </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="controlledcompo"><MDBBtn className='my-2' color="secondary" > Controlled Component </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="uncontrolledcompo"><MDBBtn className='my-2' color="secondary" > Uncontrolled Component</MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="compositionvsinheritance"><MDBBtn className='my-2' color="secondary" > Composition Vs Inheritance </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="statelifting"><MDBBtn className='my-2' color="secondary" > State Lifting </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="arrayaccess"><MDBBtn className='my-2' color="secondary" > Array access </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="apiexample"><MDBBtn className='my-2' color="secondary" > Api example </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="cssexample"><MDBBtn className='my-2' color="secondary" > css example </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="Dynamicsubmenu"><MDBBtn className='my-2' color="secondary" > Dynamic submenu </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="spreadandrest"><MDBBtn className='my-2' color="secondary" > Spread and Rest </MDBBtn></Link>
            </li>
            <li className="d-block" >
            <Link to="task"><MDBBtn className='my-2' color="secondary" > Task </MDBBtn></Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </>
    )
  }
}
