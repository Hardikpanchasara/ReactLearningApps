import React from 'react'
import Navbar from './Navbar'
import { UserData } from './api/UserData'
import { useDispatch } from 'react-redux'
import { addUser } from './store/slice/Userslice'
import DisplayUser from './DisplayUser'
import DeleteAllUser from './DeleteAllUser'

const AddAdmin = () => {
    const dispatch = useDispatch()
    const addNewUser = (payload) => {
    //   console.log(payload)
      dispatch(addUser(payload))
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className='text-center fw-bold my-5 text-black '>ADMIN TABLE</h1>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="d-flex justify-content-between ">
                            <h3>List Of User Details</h3>
                            <button type="button" className="btn btn-success" onClick={() => addNewUser(UserData()) } >Add User</button>
                        </div>
                        <hr />
                        <ol>
                        <DisplayUser />
                        </ol>
                        <hr />
                        <DeleteAllUser />
                    </div>
                </div>

            </div>

        </>
    )
}