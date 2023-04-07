import React from 'react'
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"

const Listcomponent = () => {
    const courses = ["react","node","mern"]
  return (
    <div className='my-5'>
      <List sx={{width:"250px", background:"grey"}}>
        {courses.map(course => (
            <ListItem>
                <ListItemButton>{">"}</ListItemButton>
                <ListItemText primary={course} />
            </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Listcomponent;