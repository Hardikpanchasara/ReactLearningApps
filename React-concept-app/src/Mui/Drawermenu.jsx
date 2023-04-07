import React, { useState } from 'react'
import { Button, Drawer, ListItemButton, ListItemText, Snackbar, Box, CircularProgress ,LinearProgress, Rating, Typography, IconButton} from "@mui/material"
import AddReactionIcon from '@mui/icons-material/AddReaction';

const Drawermenu = () => {
    const [open, setopen] = useState(false)
    const courses = ["react", "node", "mern", "next", "express"];

    // for the nackbar
    const [Open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    // for rating
    const [value, setvalue] = useState()

    // const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setOpen(false);
    // };

    return (
        <>
            <div className='d-flex justify-content-center my-3'>
                <Button variant='contained' onClick={() => setopen(true)}>
                    Open the Drawer
                </Button>
                <Drawer open={open} onClose={() => setopen(false)}>
                    <list>
                        {courses.map(course => (
                            <ListItemButton onClick={() => setopen(false)}>
                                <ListItemText primary={course} />
                            </ListItemButton>
                        ))}
                    </list>
                </Drawer>
            </div>
            <div>
                <Button onClick={handleClick}>Open simple snackbar</Button>
                <Snackbar
                    open={Open}
                    autoHideDuration={2000}
                    // onClose={handleClose}
                    message="Note archived"
                />
            </div>
            <div className='my-3'>
                <Box>
                    <CircularProgress />
                    <LinearProgress />
                </Box>
            </div>
            <div>
                <Rating value={value} onChange={(e,val) => setvalue(val)} size="large" precision={0.5} />
                <Typography>you are Rated {value !== undefined ? value : 0} star</Typography>
            </div>
            <br/>
            <IconButton onClick={() => alert("this is icons")}>
                <AddReactionIcon color='secondary' />
            </IconButton>
        </>
    )
}

export default Drawermenu