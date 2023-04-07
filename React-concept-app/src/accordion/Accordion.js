import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

const Accor = ({ question, answer }) => {
    const [show, setshow] = useState(false)
    return (
        <div className='my-3'>
            <Accordion>
                <AccordionSummary expandIcon={">"} onClick={() => setshow(!show)}>
                    <Typography variant='h5'>
                    {question}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='h6'>
                    {show && <p>{answer}</p>}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accor;