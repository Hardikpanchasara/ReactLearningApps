import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

const Accord = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
        <Typography>
        what is mern stack?
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        this is about the mern stack development...
        </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accord