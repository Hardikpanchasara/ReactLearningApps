import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Example = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row my-5">
                    <div className="col-6">
                       <Link to="classComponent"><MDBBtn className='mx-auto d-block' color='dark' >Class Component</MDBBtn></Link>
                    </div>
                    <div className="col-6">
                       <Link to="functioncomponent"><MDBBtn className='mx-auto d-block' color='dark' >Function Component</MDBBtn></Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Example