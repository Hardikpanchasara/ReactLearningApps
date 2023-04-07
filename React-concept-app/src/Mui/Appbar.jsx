import React,{useState} from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";

function Appbar() {
    const [Value,setValue] = useState(0)
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4">Mui</Typography>
                    <Tabs sx={{marginLeft:"auto"}}
                    value={Value}
                    onChange={(e,val) => setValue(val) }
                    textColor='inherit'
                    indicatorColor="secondary">
                     <Tab label="Home" />
                     <Tab label="About" />
                     <Tab label="Contact" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar;