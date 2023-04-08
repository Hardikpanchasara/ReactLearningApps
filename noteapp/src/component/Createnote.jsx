import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const Createnote = (params) => {
    const [expand,setExpand] = useState(false)
    const [note,setnote] = useState({
        title:"",
        content: "",
    })
    const InputEvent = (e) => {   
        const {name , value} = e.target
        setnote((prev) => {
            return {
                ...prev,
                [name] : value,
            }
        })
    }
    const addEvent = () => {
        params.passNote(note)
        setnote({
            title:"",
            content:"",
        })
    };
    const expandIt = () => {
        setExpand(true)
    };
    const expandOff = () => {
        setExpand(false)
    };
    return (
        <>
            <div className='main_note' onDoubleClick={expandOff}>
                <form>
                    {expand ? 
                    <input
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Title'
                        autoComplete='off' /> : null }
                    <textarea
                        rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        onClick={expandIt}
                        placeholder="enter a message">
                    </textarea>
                    {expand ? 
                    <Button onClick={addEvent} >
                        <AddIcon className='plus_sign' />
                    </Button> : null}
                </form>

            </div>
        </>
    )
}

export default Createnote