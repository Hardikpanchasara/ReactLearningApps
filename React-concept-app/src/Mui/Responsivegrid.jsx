import { Grid } from '@mui/material'
import React from 'react'

const Responsivegrid = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid
                    item
                    sx={{backgroundColor:"yellow"}}
                    xs={9}
                    sm={8}
                    md={6}
                    lg={8}
                    xl={9}
                >
                component1
                </Grid>
                <Grid
                    item
                    sx={{backgroundColor:"red"}}
                    xs={3}
                    sm={4}
                    md={6}
                    lg={4}
                    xl={3}
                >
                component2
                </Grid>
            </Grid>
        </div>
    )
}

export default Responsivegrid