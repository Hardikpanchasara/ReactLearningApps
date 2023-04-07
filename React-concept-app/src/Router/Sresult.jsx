import React from 'react'

const Sresult = (params) => {
    const Img = `https://picsum.photos/id/${params.name}/800/800`
  return (
    <div>
        <img src={Img} alt="search" />
    </div>
  )
}

export default Sresult