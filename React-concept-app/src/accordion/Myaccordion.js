import React, { useState } from 'react'
import Accor from './Accordion'
import { question } from './api'

const Myaccordion = () => {
    const [data,setdata] = useState(question)
  return (
    <div>
       <div className='w-75 mx-auto'>
          <h1>Gk questions (accordion)</h1>
          {data.map((curElm) => {
            const { id } = curElm 
            return <Accor key={id} {...curElm} />
          })}
       </div>
    </div>
  )
}

export default Myaccordion