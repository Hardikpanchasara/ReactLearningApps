import React, { useEffect, useRef, useState } from 'react'
import ChildCompo from './ChildCompo'

const ParentCompo = () => {
  const [ele, setEle] = useState()
  const childRef = useRef()

  const ParentFunc = async (data) => {
    console.log("called parent func ", data)
    await setEle(data)
  }
  console.log(ele)

  const ResetTable = () => {
    setEle([,])
  }

  return (
    <>
      {JSON.stringify(ele)}

      {(ele && ele.length) ?
        <div className="container mt-5">
          <table>
            <thead>
              <tr>
                <th>col-1</th>
                <th>col-2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ele[0]}</td>
                <td>{ele[1]}</td>
              </tr>
              <tr>
                <td>{ele[2]}</td>
                <td>{ele[3]}</td>
              </tr>
            </tbody>
          </table>
        </div> : "no data"
      }

      <div className="row mt-5">
        <div className="col">
          <button className='btn mt-2' onClick={() => childRef.current.getalert()}>Shuffle</button>
          <button className='btn_2 ms-5' onClick={ResetTable} >Reset</button>
          <button className='btn_2 ms-5' onClick={childRef.current.ChildMethod} >Reset</button>
        </div>
      </div>

      <div className='mt-5'>
        <ChildCompo onAddHandler={ParentFunc} ref={childRef} />
      </div>
    </>
  )
}

export default ParentCompo