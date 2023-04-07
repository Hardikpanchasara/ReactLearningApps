import React, { useState } from "react";

// const Forms = () => {
//     const [val, setVal] = useState("")
//     const [pass, setPass] = useState("")
//     const [afterval, setafterval] = useState("")
//     const [afterPass, setafterPass] = useState("")
//     const InpEvent = (event) => {
//         // console.log(event.target.value);
//         setVal(event.target.value);
//     }
//     const InpEventtwo = (event) => {
//         // console.log(event.target.value);
//         setPass(event.target.value);
//     }
//     const onSubmit = (event) => {
//         // console.log(event.target.value);
//         event.preventDefault()
//         setafterval(val);
//         setafterPass(pass);
//     }
//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <div className="my-5 text-center">
//                     <h1>Forms {afterval} {afterPass}</h1>
//                     <input type="text" placeholder="enter your name" onChange={InpEvent} value={val} />
//                     <input type="password" placeholder="enter your password" onChange={InpEventtwo} value={pass} />

//                     <button type="submit" className="btn btn-primary d-block mx-auto my-3">submit</button>

//                 </div>
//             </form>
//         </>
//     )
// }

const Forms = () => {
    const [val, setVal] = useState({
        username : "",
        password : "",
        email : "" ,
        phone : "",
    })
    const InpEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const {value, name} = event.target; 

        setVal((prev) => { 
            console.log(prev);
            return{
                ...prev,
                [name] : value,
            }
            // if (name === "username"){
            //     return{
            //         username : value,
            //         password : prev.password,
            //         email : prev.email,
            //         phone : prev.phone,
            //     }
            // }
            // else if (name === "password"){
            //     return{
            //         username : prev.username,
            //         password : value,
            //         email : prev.email,
            //         phone : prev.phone,
            //     }
            // }
            // else if (name === "email"){
            //     return{
            //         username : prev.username,
            //         password : prev.password,
            //         email : value,
            //         phone : prev.phone,
            //     }
            // }
            // else if (name === "phone"){
            //     return{
            //         username : prev.username,
            //         password : prev.password,
            //         email : prev.email,
            //         phone : value,
            //     }
            // }
        })
    }
    const onSubmit = (event) => {
        // console.log(event.target.value);
        event.preventDefault();
        alert('form submmited')
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="my-5 text-center">
                    <h1>Forms  </h1>
                    <p>{val.username}</p>
                    <p>{val.password}</p>
                    <p>{val.email}</p>
                    <p>{val.phone}</p>
                    <input type="text"
                    placeholder="enter your name"
                    onChange={InpEvent} 
                    value={val.username} 
                    name="username" />
                    <br/>

                    <input type="password" 
                    placeholder="enter your password" 
                    onChange={InpEvent} 
                    value={val.password} 
                    name="password" />
                    <br/>

                    <input type="eamil" 
                    placeholder="enter your email" 
                    onChange={InpEvent} 
                    value={val.email} 
                    name="email" />
                    <br/>

                    <input type="tel" 
                    placeholder="enter your number" 
                    onChange={InpEvent} 
                    value={val.phone} 
                    name="phone" />
                    <br/>

                    <button type="submit" className="btn btn-primary d-block mx-auto my-3">submit</button>

                </div>
            </form>
        </>
    )
}

export default Forms;