import React, { useState } from 'react'
import { Box, Button, Link, Modal, Typography } from "@mui/material"

const Modals = () => {
    const [open,setopen] = useState(false)
  return (
    <div>
        <Button onClick={() => setopen(true)}>open Modal</Button>
        <Modal open={open} onClose={() => setopen(false)}>
            <Box position={"absolute"} top="50%" left={"50%"}>
                <Typography>this is modal</Typography>
                <Button variant="contained" onClick={() => setopen(false)}>cancel</Button>
            </Box>
        </Modal>

        <Link 
        variant='h4'
        color={"secondary"}
        href="https://mui.com/material-ui/react-link/"
        underline='hover'>
            visit this
        </Link>
    </div>
  )
}

export default Modals