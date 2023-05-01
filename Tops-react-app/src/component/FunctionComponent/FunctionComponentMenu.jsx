import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit'

const FunctionComponentMenu = () => {
  return (
    <>
      <div className="row">
        <div className="col-6 offset-6">
          <ul>
            <li className="d-block" >
              <Link to="Functionintro"><MDBBtn className='my-2' color="secondary" > Function component Intro </MDBBtn></Link>
            </li>
            <li className="d-block" >
              <Link to="usestate"><MDBBtn className='my-2' color="secondary" > UseState </MDBBtn></Link>
            </li>
            <li className="d-block" >
              <Link to="useeffect"><MDBBtn className='my-2' color="secondary" > UseEffect </MDBBtn></Link>
            </li>
            <li className="d-block" >
              <Link to="usecontext"><MDBBtn className='my-2' color="secondary" > UseContext </MDBBtn></Link>
            </li>
            <li className="d-block" >
              <Link to="usereducer"><MDBBtn className='my-2' color="secondary" > UseReducer </MDBBtn></Link>
            </li>
            <li className="d-block" >
              <Link to="useref"><MDBBtn className='my-2' color="secondary" > UseRef </MDBBtn></Link>
            </li>
            <li className="d-block" >
              <Link to="uselayouteffect"><MDBBtn className='my-2' color="secondary" > UseLayoutEffect </MDBBtn></Link>
            </li>
            <li className="d-block" >
              <Link to="usememo"><MDBBtn className='my-2' color="secondary" > UseMemo </MDBBtn></Link>
            </li>
            <li className="d-block" >
              <Link to="usecallback"><MDBBtn className='my-2' color="secondary" > UseCallBack </MDBBtn></Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default FunctionComponentMenu