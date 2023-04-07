import React, { useState } from "react";
import Clock from 'react-digital-clock';


const Hooks = () => {
    // const state = useState();
    // console.log(state);
    const [count, setCount] = useState(0);
    let NewTime = new Date().toLocaleTimeString()
    const [Ctime,setCtime] =useState(NewTime)
    const IncNum = () => {
        setCount(count + 1);
        // console.log("click " + count++);
    }
    const GetCtime = () => {
        NewTime = new Date().toLocaleTimeString()
        setCtime(NewTime);
    }
    setInterval(GetCtime, 1000);
    let bg_grey = "grey";
    let button = "Try events";
    const [bg, setbg] = useState(bg_grey);
    const [btn, setbtn] = useState(button);
    const bgchange = () => {
        setbg("green")
        setbtn("😁😅")
    }
    
    
    return (
        <>
            <div className="container-fluid text-center my-5">
                <h1 >Hooks concept</h1>
                <h3>{count}</h3>
                <button type="button" className="btn btn-primary mb-4" onClick={IncNum}>Click Me</button>
                <h3>{Ctime}</h3>
                <div className="bg-secondary">
                <Clock />
                </div>
                <div className=" " style={{backgroundColor:bg}} >
                <button type="button" className="btn btn-primary my-4" onClick={bgchange}>{btn}</button>
                </div>
                
            </div>
        </>
    )
}

export default Hooks;