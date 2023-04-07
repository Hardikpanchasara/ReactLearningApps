import React, { useState } from 'react'
import Sresult from './Sresult';

const Serch = () => {
    const [Img ,setImg] = useState("");
    const InputImg = (e) => {
        const data = e.target.value;
        setImg(data)
    }
  return (
    <>
    <div>
        <input 
        type="text" 
        placeholder='enter number to get image' 
        value={Img}
        onChange={InputImg} 

        />
        {Img === "" ?  null : <Sresult name={Img} /> }

    </div>
    </>
  )
}

export default Serch