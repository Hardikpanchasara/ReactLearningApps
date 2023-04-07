import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllUser } from './store/slice/Userslice'

const DeleteAllUser = () => {

    const dispatch = useDispatch()
    const clearAllUser = () => {
      dispatch(deleteAllUser())
    }

    return (
        <>
            <button type="button" className="btn btn-danger ms-auto d-block my-3" onClick={() => clearAllUser()}>Delete All User</button>
        </>
    )
}

export default DeleteAllUser