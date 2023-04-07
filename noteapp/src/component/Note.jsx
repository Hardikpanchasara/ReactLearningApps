
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (params) => {
  const DeleteNote = () => {
    params.deleteItem(params.id)
  }
  return (
    <div className='note'>
    <h1>{params.title}</h1>
    <br/>
    <p>{params.content}</p>
    <br/>
    <button className='btn' onClick={DeleteNote}>
        <DeleteOutlineIcon className='deleteIcon' />
    </button>

    </div>
  )
}

export default Note