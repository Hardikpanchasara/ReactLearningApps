import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [num, setNum] = useState()
    const [name, setname] = useState()
    const [color, setcolor] = useState()
    const [shape, setshape] = useState()
    useEffect(() => {
        // alert("hi")
        async function getdata() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${num}/`)
            console.log(res)
            console.log(res.data.color.name)
            console.log(res.data.shape.name)
            setcolor(res.data.color.name)
            setshape(res.data.shape.name)
            setname(res.data.name)
        }
        getdata();
    })
    return (
        <>
            <div className='bg-secondary text-center p-3'>
                <h1>You choose <span style={{ color: "white" , textDecoration:"underline" }}> {num} </span> number pokemon</h1>
                <h1>you choose <span style={{ color: "white" , textDecoration:"underline" }}> {name} </span> pokemon</h1>
                <h1>this pokemon color is <span style={{ color: `${color}` , textDecoration:"underline" }}> {color} </span></h1>
                <h1>this pokemon shape is <span style={{ color: "white" , textDecoration:"underline" }}> {shape} </span></h1>
                <select value={num} onChange={(e) => {
                    setNum(e.target.value)
                }}>
                    <option value="1">1</option>
                    <option value="25">25</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </>
    )
}

export default Pokemon;