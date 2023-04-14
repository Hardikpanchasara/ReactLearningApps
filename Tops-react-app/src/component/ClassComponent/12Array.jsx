import React from 'react'

function ArrayAccesthroughProps(props) {
    console.log(props)

    const updatelist = MenuItem.map((val , ind) => {
        return (
            <li key={ind}>{val}, key={ind}</li>
        )
    })
    
    return (
        <>
        <ul>
            {updatelist} 
            
        </ul>
        </>
    )
}

const MenuItem = [1,2,3,4,5]
const Array = () => {
  return (
    <div>
        <ArrayAccesthroughProps menuItem={MenuItem} />
    </div>
  )
}

export default Array