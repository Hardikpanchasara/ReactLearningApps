import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

const ChildCompo = forwardRef((props, ref) => {
  const [ele, setEle] = useState({})
  const [ele2, setEle2] = useState({})
  const arr = [1, 2, 3, 4, 5, 6]

  useImperativeHandle(ref, () => ({
    getalert() {
      let suffleRes = shuffle(arr)
      console.log(suffleRes)
      suffleRes.shift()
      props.onAddHandler(suffleRes)
    }
  }))


  useEffect(() => {
    let suffleRes = shuffle(arr)
    console.log(suffleRes)

    setEle(suffleRes[0])
    setEle2(suffleRes[1])
    suffleRes.shift()
    suffleRes.shift()
    console.log(suffleRes)

    props.onAddHandler(suffleRes)
  }, [])


  const shuffle = (array) => {
    console.log("called inside shuffle");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const ChildMethod = () => {
    console.log("child method call")
  }

  return (
    <>
    Remaining Array Element : {JSON.stringify(ele)},{JSON.stringify(ele2)}
    <br /><br />
    All the Values of Array = {(arr)}
    </>
  )
})


export default ChildCompo