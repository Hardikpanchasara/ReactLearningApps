import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from './store/slice/Userslice'

const DisplayUser = () => {

  const dispatch = useDispatch() ;


  const data = useSelector((state) => {
    return state.users
  })
  // console.log(data)

  const deleteUser = (id) => { 
    dispatch(removeUser(id))
  }


  return (
    <>
      {
        data.map((user, id) => {
          return (
            <>
              <li key={id}>
                {user}
                <button type="button" className="btn btn-danger ms-auto d-block" onClick={() => deleteUser(id)}><i className="fas fa-trash-alt"></i></button>
              </li>
              <hr />
            </>)
        })
      }
    </>
  )
}

export default DisplayUser