import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"

const Cards = () => {
    const [open, setopen] = useState(false)
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 350 }}
                    image="https://images.pexels.com/photos/584165/pexels-photo-584165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" onClick={() => setopen(true)}>Delete</Button>
                </CardActions>
            </Card>

            <Dialog open={open} onClose={() => setopen(false)}>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    are you want delete this?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setopen(false)}>cancel</Button>
                    <Button>delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Cards;