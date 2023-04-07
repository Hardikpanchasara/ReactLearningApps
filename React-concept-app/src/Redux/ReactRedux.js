import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector , useDispatch } from 'react-redux';
import { IncNumber , DecNumber} from "./action/index";
import changeNumber from './reducer/IncDec';


 
const ReactRedux = () => {
    const mystate = useSelector((state) => state.changeNumber)
    const dispatch = useDispatch();
    return (
        <>
            <div className="container my-5 d-flex justify-content-center">

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button title='Decrement' onClick={() => dispatch(DecNumber())}>-</Button>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" variant="standard" value={mystate} />
                    </Box>
                    <Button title='Increment' onClick={() => dispatch(IncNumber(5))}>+</Button>
                </ButtonGroup>
            </div>
        </>
    )
}

export default ReactRedux